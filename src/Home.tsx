import React, { Component } from "react";
import { isPropertySignature } from "typescript";
import Assets from "./assets.json";
import "./index.css";

interface Props {}

interface State {
  data: Array<Object>;
  clicked: Array<Object>;
}

export default class Home extends React.Component<Props, State> {
  // state = {
  //     data: [],
  // }

  constructor(props: Props) {
    super(props);

    this.state = {
      data: [],
      clicked: [],
    };
  }

  /* REQUEST TO API IS TIMING OUT WITH 429 ERROR (TOO MANY REQUESTS MADE TO SERVER) */
  // componentDidMount(){
  //     fetch(`https://rest-sandbox.coinapi.io/v1/assets/`, {
  //       headers : {
  //         'X-CoinAPI-Key': "BB4C718E-D27B-4869-95E0-5E4D9B787871",
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //        }

  //     })
  //     .then(resp => resp.json())
  //     .then((resp) =>
  //     this.setState({
  //         data: resp
  //     }))
  // }

  /* SAVED ASSETS TO JSON FILE, WILL BE USING THIS FOR DEVELOPMENT PURPOSES */
  componentDidMount() {
    this.setState({
      data: Assets,
    });
  }

  renderAssets = () => {
      console.log(this.state.data)
    if (this.state.data.length > 0) {
      return this.state.data.map((asset) => {
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
          )
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
    //   this.renderAssets();
    this.forceUpdate();
    } else {
      this.state.clicked.push(asset[0]);
    //   this.renderAssets();
    this.forceUpdate();
    }
  };

  render() {
    return (
      <>
        <h1>Please Click on a Currency to View More!</h1>
        <div className="parent-wrapper">
          <div className="parent">{this.renderAssets()}</div>
        </div>
      </>
    );
  }
}
