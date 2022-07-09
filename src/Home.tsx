import React, { Component } from "react";
import { isPropertySignature } from "typescript";
import Assets from "./assets.json";
import "./index.css";
import ExchangeRate from "./ExchangeRate"

interface Props {}

interface State {
  data: Array<Object>;
  clicked: Array<Object>;
  searchInput: string;
}

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      clicked: [],
      searchInput: "",
    };
  }

  /* REQUEST TO API IS TIMING OUT WITH 429 ERROR (TOO MANY REQUESTS MADE TO SERVER) */
  componentDidMount(){
      fetch(`https://rest-sandbox.coinapi.io/v1/assets/`, {
        headers : {
          'X-CoinAPI-Key': "0B619FCC-0363-46BF-A841-39F48DC8D15E",
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }

      })
      .then(resp => resp.json())
      .then((resp) =>
      this.setState({
          data: resp
      }))
  }
  

  /* SAVED ASSETS TO JSON FILE, WILL BE USING THIS FOR DEVELOPMENT PURPOSES */
//   componentDidMount() {
//     this.setState({
//       data: Assets,
//     });
//   }

  renderAssets = () => {
    if (this.state.data.length > 0) {
      return this.state.data.map((asset) => {
        if (this.state.searchInput.length > 0) {
          if (
            asset["asset_id"]
              .toLowerCase()
              .includes(this.state.searchInput.toLowerCase())
          ) {
            if (
              this.state.clicked.some((e) => e["asset_id"] == asset["asset_id"])
            ) {
              return (
                <div
                  className="clickedCard"
                  id={asset["asset_id"]}
                  onClick={() => this.viewMoreInfo(asset["asset_id"])}>
                  <h1>{asset["name"]}</h1>
                  <p>Trade Start: {asset["data_trade_start"]}</p>
                  <p>Trade End: {asset["data_trade_end"]}</p>
                  <p>Quote Start: {asset["data_quote_start"]}</p>
                  <p>Quote End: {asset["data_quote_end"]}</p>
                  <p>Volume In A Day: {asset["volume_1day_usd"]}</p>
                  <p>Volume In Hours: {asset["volume_1hrs_usd"]}</p>
                  <p>Volume In A Month: {asset["volume_1mth_usd"]}</p>
                </div>
              );
            } else {
              return (
                <div
                  className="assetCard"
                  id={asset["asset_id"]}
                  onClick={() => this.viewMoreInfo(asset["asset_id"])}>
                  <h1>{asset["name"]}</h1>
                </div>
              );
            }
          }
        } else if (
          this.state.clicked.some((e) => e["asset_id"] == asset["asset_id"])
        ) {
          return (
            <div
              className="clickedCard"
              id={asset["asset_id"]}
              onClick={() => this.viewMoreInfo(asset["asset_id"])}>
              <h1>{asset["name"]}</h1>
              <p>Trade Start: {asset["data_trade_start"]}</p>
              <p>Trade End: {asset["data_trade_end"]}</p>
              <p>Quote Start: {asset["data_quote_start"]}</p>
              <p>Quote End: {asset["data_quote_end"]}</p>
              <p>Volume In A Day: {asset["volume_1day_usd"]}</p>
              <p>Volume In Hours: {asset["volume_1hrs_usd"]}</p>
              <p>Volume In A Month: {asset["volume_1mth_usd"]}</p>
            </div>
          );
        } else {
          return (
            <div
              className="assetCard"
              id={asset["asset_id"]}
              onClick={() => this.viewMoreInfo(asset["asset_id"])}>
              <h1>{asset["name"]}</h1>
            </div>
          );
        }
      });
    }
  };

  viewMoreInfo = (id: string) => {
    var asset = this.state.data.filter((asset) => asset["asset_id"] == id);

    if (this.state.clicked.some((e) => e["asset_id"] == id)) {
      const index = this.state.clicked.indexOf(asset, 0);
      this.state.clicked.splice(index, 1);
      this.forceUpdate();
    } else {
      this.state.clicked.push(asset[0]);
      this.forceUpdate();
    }
  };

  updateSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    this.setState({
      searchInput: event.target.value,
    });
    this.forceUpdate();
  };


  render() {
    return (
      <>
        <form className="searchField">
          <label>Search For Currency: </label>
          <input
            type="text"
            id="searchTerm"
            onChange={this.updateSearch}></input>
        </form>
      
        <ExchangeRate {...this.state.data} />
        
        <h1>Please Click on a Currency to View More!</h1>
        <div className="parent-wrapper">
          <div className="parent">{this.renderAssets()}</div>
        </div>
      </>
    );
  }
}
