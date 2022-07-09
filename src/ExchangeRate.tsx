import React, { Component } from "react";
import { getConstantValue, isPropertySignature } from "typescript";
import './index.css'


interface Props{

}

interface State{
    optionOne: string,
    optionTwo: string,
    exchangeRate: Array<Object>,
    clicked: boolean
}


export default class ExchangeRate extends React.Component<Props, State>{

constructor(props: Props){
super(props);

this.state = {
    optionOne: "USD",
    optionTwo: "USD",
    exchangeRate: [],
    clicked: false

}
}

 

    checkProps = () => {
        console.log(this.props[0]["asset_id"]);
    }

    optionOne = (event: React.KeyboardEvent<HTMLSelectElement>) => {
        this.setState({
            optionOne: event.target.value
        })
    }

    optionTwo = (event: React.KeyboardEvent<HTMLSelectElement>) => {
        this.setState({
            optionTwo: event.target.value
        })
    }

    handleConversion = () => {

        if(this.state.optionOne.length > 0 && this.state.optionTwo.length > 0){
            let url = `https://rest-sandbox.coinapi.io/v1/exchangerate/` + this.state.optionOne + '/' + this.state.optionTwo + "/"
            console.log(url);
            fetch(url, {
                headers: {
                    'X-CoinAPI-Key': '0B619FCC-0363-46BF-A841-39F48DC8D15E',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }) 
            .then(resp => resp.json())
            .then((resp) =>
            this.setState({
                exchangeRate: resp,
                clicked: true
            }))

            this.forceUpdate();
        }else{
            alert("Please make sure you have selected two currencies to convert!");
        }
        
    }



    render() {
        return(

            <div className="exchangeRateForm">
                <label>Please Select Two Entries to Calculate the Exchange Rate</label>
                <select onChange={this.optionOne}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="SGD">SGD</option>
                    <option value="DKK">DKK</option>
                    <option value="ILS">ILS</option>
                    <option value="CAD">CAD</option>
                    <option value="TRY">TRY</option>
                    <option value="ZAR">ZAR</option>
                    <option value="HUF">HUF</option>
                    <option value="CHF">CHF</option>
                    <option value="MYR">MYR</option>
                    <option value="NOK">NOK</option>
                    <option value="HKD">HKD</option>
                    <option value="MXN">MXN</option>
                    <option value="ISK">ISK</option>
                    <option value="PHP">PHP</option>
                    <option value="RON">RON</option>
                    <option value="IDR">IDR</option>
                    <option value="NZD">NZD</option>
                    <option value="SEK">SEK</option>
                    <option value="INR">INR</option>
                    <option value="AUD">AUD</option>
                    <option value="CNY">CNY</option>
                    <option value="PLN">PLN</option>
                    <option value="KRW">KRW</option>
                    <option value="BGN">BGN</option>
                    <option value="CZK">CZK</option>
                    <option value="HRK">HRK</option>
                    <option value="THB">THB</option>
                    <option value="BRL">BRL</option>
                    <option value="LTC">LTC</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                    <option value="BNB">BNB</option>
                    <option value="LINK">LINK</option>
                    <option value="DOGE">DOGE</option>
                    <option value="ADA">ADA</option>
                    <option value="TRX">TRX</option>
                    <option value="XRP">XRP</option>
                    <option value="USDC">USDC</option>
                    <option value="LCX">LCX</option>
                    <option value="BOND">BOND</option>
                    <option value="SOL">SOL</option>
                    <option value="RAD">RAD</option>
                    <option value="NU">NU</option>
                    <option value="LRC">LRC</option>
                    <option value="BASKET">BASKET</option>
                    <option value="RLC">RLC</option>
                    <option value="DOT">DOT</option>
                    <option value="XBT">XBT</option>
                    <option value="CLV">CLV</option>
                    <option value="EOS">EOS</option>
                    <option value="BCH">BCH</option>
                    <option value="MASK">MASK</option>
                    <option value="SNX">SNX</option>
                    <option value="BNT">BNT</option>
                    <option value="STORJ">STORJ</option>
                    <option value="OMG">OMG</option>
                    <option value="YFI">YFI</option>
                    <option value="DNT">DNT</option>
                    <option value="ATOM">ATOM</option>
                    <option value="TRAC">TRAC</option>
                    <option value="MANA">MANA</option>
                    <option value="NMR">NMR</option>
                    <option value="AVAX">AVAX</option>
                    <option value="KNC">KNC</option>
                    <option value="XLM">XLM</option>
                    <option value="SUKU">SUKU</option>
                    <option value="CRV">CRV</option>
                    <option value="BUSD">BUSD</option>
                    <option value="OGN">OGN</option>
                    <option value="ICP">ICP</option>
                    <option value="CGLD">CGLD</option>
                    <option value="XTZ">XTZ</option>
                    <option value="FARM">FARM</option>
                    <option value="BTRST">BTRST</option>
                    <option value="ETC">ETC</option>
                    <option value="MLN">MLN</option>
                    <option value="ZEN">ZEN</option>
                    <option value="CRO">CRO</option>
                    <option value="ZRX">ZRX</option>
                    <option value="XYO">XYO</option>
                    <option value="UNI">UNI</option>
                    <option value="AAVE">AAVE</option>
                    <option value="ALGO">ALGO</option>
                    <option value="ENJ">ENJ</option>
                    <option value="BAT">BAT</option>
                    <option value="MIR">MIR</option>
                    <option value="ASM">ASM</option>
                    <option value="DAI">DAI</option>
                    <option value="TRU">TRU</option>
                    <option value="1INCH">1INCH</option>
                    <option value="FORTH">FORTH</option>
                    <option value="CTSI">CTSI</option>
                    <option value="ARPA">ARPA</option>
                    <option value="CHZ">CHZ</option>
                    <option value="COTI">COTI</option>
                    <option value="FET">FET</option>
                    <option value="MATIC">MATIC</option>
                    <option value="AXS">AXS</option>
                    <option value="SUSHI">SUSHI</option>
                    <option value="MKR">MKR</option>
                    <option value="ACH">ACH</option>
                    <option value="COMP">COMP</option>
                    <option value="RGT">RGT</option>
                    <option value="TRB">TRB</option>
                    <option value="YFII">YFII</option>
                    <option value="FIL">FIL</option>
                    <option value="REN">REN</option>
                    <option value="KEEP">KEEP</option>
                    <option value="ZEC">ZEC</option>
                    <option value="GRT">GRT</option>
                    <option value="BAL">BAL</option>
                    <option value="DASH">DASH</option>
                    <option value="SAND">SAND</option>
                    <option value="BAND">BAND</option>
                    <option value="WCFG">WCFG</option>
                    <option value="FX">FX</option>
                    <option value="ORN">ORN</option>
                    <option value="PAX">PAX</option>
                    <option value="AUCTION">AUCTION</option>
                    <option value="REQ">REQ</option>
                    <option value="QNT">QNT</option>
                    <option value="CVC">CVC</option>
                    <option value="SKL">SKL</option>
                    <option value="DDX">DDX</option>
                    <option value="UMA">UMA</option>
                    <option value="ANKR">ANKR</option>
                    <option value="REP">REP</option>
                    <option value="SHIB">SHIB</option>
                    <option value="NKN">NKN</option>
                    <option value="BADGER">BADGER</option>
                    <option value="XMR">XMR</option>
                    <option value="IOTX">IOTX</option>
                    <option value="JASMY">JASMY</option>
                    <option value="WBTC">WBTC</option>
                    <option value="RLY">RLY</option>
                    <option value="AGLD">AGLD</option>
                    <option value="KRL">KRL</option>
                    <option value="RARI">RARI</option>
                    <option value="OXT">OXT</option>
                    <option value="LOOM">LOOM</option>
                    <option value="PERP">PERP</option>
                    <option value="QUICK">QUICK</option>
                    <option value="POLY">POLY</option>
                    <option value="LPT">LPT</option>
                    <option value="GTC">GTC</option>
                    <option value="VET">VET</option>
                    <option value="1000SHIB">1000SHIB</option>
                    <option value="AMP">AMP</option>
                    <option value="TRIBE">TRIBE</option>
                    <option value="PLA">PLA</option>
                    <option value="LUNA">LUNA</option>
                    <option value="RAI">RAI</option>
                    <option value="C98">C98</option>
                    <option value="FTM">FTM</option>
                    <option value="KAVA">KAVA</option>
                    <option value="EGLD">EGLD</option>
                    <option value="THETA">THETA</option>
                    <option value="ONT">ONT</option>
                    <option value="STMX">STMX</option>
                    <option value="DENT">DENT</option>
                    <option value="KSM">KSM</option>
                    <option value="QTUM">QTUM</option>
                    <option value="LIT">LIT</option>
                    <option value="HOT">HOT</option>
                    <option value="DYDX">DYDX</option>
                    <option value="NEAR">NEAR</option>
                    <option value="SXP">SXP</option>
                    <option value="TOMO">TOMO</option>
                    <option value="FLM">FLM</option>
                    <option value="WAVES">WAVES</option>
                    <option value="ZIL">ZIL</option>
                    <option value="CELO">CELO</option>
                    <option value="ATA">ATA</option>
                    <option value="IOST">IOST</option>
                    <option value="HNT">HNT</option>
                    <option value="GALA">GALA</option>
                    <option value="DODO">DODO</option>
                    <option value="ALCX">ALCX</option>
                    <option value="AUDIO">AUDIO</option>
                    <option value="ALICE">ALICE</option>
                    <option value="OCEAN">OCEAN</option>
                    <option value="IOTA">IOTA</option>
                    <option value="UNFI">UNFI</option>
                    <option value="REEF">REEF</option>
                    <option value="BTS">BTS</option>
                    <option value="MTL">MTL</option>
                    <option value="BTCDOM">BTCDOM</option>
                    <option value="TLM">TLM</option>
                    <option value="WLUNA">WLUNA</option>
                    <option value="UST">UST</option>
                    <option value="KLAY">KLAY</option>
                    <option value="LINA">LINA</option>
                    <option value="RAY">RAY</option>
                    <option value="FTT">FTT</option>
                    <option value="AKRO">AKRO</option>
                    <option value="MCO2">MCO2</option>
                    <option value="1000XEC">1000XEC</option>
                    <option value="CELR">CELR</option>
                    <option value="BLZ">BLZ</option>
                    <option value="SC">SC</option>
                    <option value="ONE">ONE</option>
                    <option value="SFP">SFP</option>
                    <option value="DEFI">DEFI</option>
                    <option value="NEO">NEO</option>
                    <option value="CTK">CTK</option>
                    <option value="CHR">CHR</option>
                    <option value="ALPHA">ALPHA</option>
                    <option value="AR">AR</option>
                    <option value="CTX">CTX</option>
                    <option value="RUNE">RUNE</option>
                    <option value="GNT">GNT</option>
                    <option value="ICX">ICX</option>
                    <option value="RUB">RUB</option>
                    <option value="RSR">RSR</option>
                    <option value="SRM">SRM</option>
                    <option value="BAKE">BAKE</option>
                    <option value="BTT">BTT</option>
                    <option value="HBAR">HBAR</option>
                    <option value="DGB">DGB</option>
                    <option value="XEM">XEM</option>
                    <option value="BZRX">BZRX</option>
                    <option value="BEL">BEL</option>
                    <option value="RVN">RVN</option>
                    <option value="GUSD">GUSD</option>
                    <option value="SLP">SLP</option>
                    <option value="PAXG">PAXG</option>
                    <option value="BTCST">BTCST</option>
                    <option value="CUBE">CUBE</option>
                </select>
                <select onChange={this.optionTwo}>
                <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                    <option value="SGD">SGD</option>
                    <option value="DKK">DKK</option>
                    <option value="ILS">ILS</option>
                    <option value="CAD">CAD</option>
                    <option value="TRY">TRY</option>
                    <option value="ZAR">ZAR</option>
                    <option value="HUF">HUF</option>
                    <option value="CHF">CHF</option>
                    <option value="MYR">MYR</option>
                    <option value="NOK">NOK</option>
                    <option value="HKD">HKD</option>
                    <option value="MXN">MXN</option>
                    <option value="ISK">ISK</option>
                    <option value="PHP">PHP</option>
                    <option value="RON">RON</option>
                    <option value="IDR">IDR</option>
                    <option value="NZD">NZD</option>
                    <option value="SEK">SEK</option>
                    <option value="INR">INR</option>
                    <option value="AUD">AUD</option>
                    <option value="CNY">CNY</option>
                    <option value="PLN">PLN</option>
                    <option value="KRW">KRW</option>
                    <option value="BGN">BGN</option>
                    <option value="CZK">CZK</option>
                    <option value="HRK">HRK</option>
                    <option value="THB">THB</option>
                    <option value="BRL">BRL</option>
                    <option value="LTC">LTC</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="USDT">USDT</option>
                    <option value="BNB">BNB</option>
                    <option value="LINK">LINK</option>
                    <option value="DOGE">DOGE</option>
                    <option value="ADA">ADA</option>
                    <option value="TRX">TRX</option>
                    <option value="XRP">XRP</option>
                    <option value="USDC">USDC</option>
                    <option value="LCX">LCX</option>
                    <option value="BOND">BOND</option>
                    <option value="SOL">SOL</option>
                    <option value="RAD">RAD</option>
                    <option value="NU">NU</option>
                    <option value="LRC">LRC</option>
                    <option value="BASKET">BASKET</option>
                    <option value="RLC">RLC</option>
                    <option value="DOT">DOT</option>
                    <option value="XBT">XBT</option>
                    <option value="CLV">CLV</option>
                    <option value="EOS">EOS</option>
                    <option value="BCH">BCH</option>
                    <option value="MASK">MASK</option>
                    <option value="SNX">SNX</option>
                    <option value="BNT">BNT</option>
                    <option value="STORJ">STORJ</option>
                    <option value="OMG">OMG</option>
                    <option value="YFI">YFI</option>
                    <option value="DNT">DNT</option>
                    <option value="ATOM">ATOM</option>
                    <option value="TRAC">TRAC</option>
                    <option value="MANA">MANA</option>
                    <option value="NMR">NMR</option>
                    <option value="AVAX">AVAX</option>
                    <option value="KNC">KNC</option>
                    <option value="XLM">XLM</option>
                    <option value="SUKU">SUKU</option>
                    <option value="CRV">CRV</option>
                    <option value="BUSD">BUSD</option>
                    <option value="OGN">OGN</option>
                    <option value="ICP">ICP</option>
                    <option value="CGLD">CGLD</option>
                    <option value="XTZ">XTZ</option>
                    <option value="FARM">FARM</option>
                    <option value="BTRST">BTRST</option>
                    <option value="ETC">ETC</option>
                    <option value="MLN">MLN</option>
                    <option value="ZEN">ZEN</option>
                    <option value="CRO">CRO</option>
                    <option value="ZRX">ZRX</option>
                    <option value="XYO">XYO</option>
                    <option value="UNI">UNI</option>
                    <option value="AAVE">AAVE</option>
                    <option value="ALGO">ALGO</option>
                    <option value="ENJ">ENJ</option>
                    <option value="BAT">BAT</option>
                    <option value="MIR">MIR</option>
                    <option value="ASM">ASM</option>
                    <option value="DAI">DAI</option>
                    <option value="TRU">TRU</option>
                    <option value="1INCH">1INCH</option>
                    <option value="FORTH">FORTH</option>
                    <option value="CTSI">CTSI</option>
                    <option value="ARPA">ARPA</option>
                    <option value="CHZ">CHZ</option>
                    <option value="COTI">COTI</option>
                    <option value="FET">FET</option>
                    <option value="MATIC">MATIC</option>
                    <option value="AXS">AXS</option>
                    <option value="SUSHI">SUSHI</option>
                    <option value="MKR">MKR</option>
                    <option value="ACH">ACH</option>
                    <option value="COMP">COMP</option>
                    <option value="RGT">RGT</option>
                    <option value="TRB">TRB</option>
                    <option value="YFII">YFII</option>
                    <option value="FIL">FIL</option>
                    <option value="REN">REN</option>
                    <option value="KEEP">KEEP</option>
                    <option value="ZEC">ZEC</option>
                    <option value="GRT">GRT</option>
                    <option value="BAL">BAL</option>
                    <option value="DASH">DASH</option>
                    <option value="SAND">SAND</option>
                    <option value="BAND">BAND</option>
                    <option value="WCFG">WCFG</option>
                    <option value="FX">FX</option>
                    <option value="ORN">ORN</option>
                    <option value="PAX">PAX</option>
                    <option value="AUCTION">AUCTION</option>
                    <option value="REQ">REQ</option>
                    <option value="QNT">QNT</option>
                    <option value="CVC">CVC</option>
                    <option value="SKL">SKL</option>
                    <option value="DDX">DDX</option>
                    <option value="UMA">UMA</option>
                    <option value="ANKR">ANKR</option>
                    <option value="REP">REP</option>
                    <option value="SHIB">SHIB</option>
                    <option value="NKN">NKN</option>
                    <option value="BADGER">BADGER</option>
                    <option value="XMR">XMR</option>
                    <option value="IOTX">IOTX</option>
                    <option value="JASMY">JASMY</option>
                    <option value="WBTC">WBTC</option>
                    <option value="RLY">RLY</option>
                    <option value="AGLD">AGLD</option>
                    <option value="KRL">KRL</option>
                    <option value="RARI">RARI</option>
                    <option value="OXT">OXT</option>
                    <option value="LOOM">LOOM</option>
                    <option value="PERP">PERP</option>
                    <option value="QUICK">QUICK</option>
                    <option value="POLY">POLY</option>
                    <option value="LPT">LPT</option>
                    <option value="GTC">GTC</option>
                    <option value="VET">VET</option>
                    <option value="1000SHIB">1000SHIB</option>
                    <option value="AMP">AMP</option>
                    <option value="TRIBE">TRIBE</option>
                    <option value="PLA">PLA</option>
                    <option value="LUNA">LUNA</option>
                    <option value="RAI">RAI</option>
                    <option value="C98">C98</option>
                    <option value="FTM">FTM</option>
                    <option value="KAVA">KAVA</option>
                    <option value="EGLD">EGLD</option>
                    <option value="THETA">THETA</option>
                    <option value="ONT">ONT</option>
                    <option value="STMX">STMX</option>
                    <option value="DENT">DENT</option>
                    <option value="KSM">KSM</option>
                    <option value="QTUM">QTUM</option>
                    <option value="LIT">LIT</option>
                    <option value="HOT">HOT</option>
                    <option value="DYDX">DYDX</option>
                    <option value="NEAR">NEAR</option>
                    <option value="SXP">SXP</option>
                    <option value="TOMO">TOMO</option>
                    <option value="FLM">FLM</option>
                    <option value="WAVES">WAVES</option>
                    <option value="ZIL">ZIL</option>
                    <option value="CELO">CELO</option>
                    <option value="ATA">ATA</option>
                    <option value="IOST">IOST</option>
                    <option value="HNT">HNT</option>
                    <option value="GALA">GALA</option>
                    <option value="DODO">DODO</option>
                    <option value="ALCX">ALCX</option>
                    <option value="AUDIO">AUDIO</option>
                    <option value="ALICE">ALICE</option>
                    <option value="OCEAN">OCEAN</option>
                    <option value="IOTA">IOTA</option>
                    <option value="UNFI">UNFI</option>
                    <option value="REEF">REEF</option>
                    <option value="BTS">BTS</option>
                    <option value="MTL">MTL</option>
                    <option value="BTCDOM">BTCDOM</option>
                    <option value="TLM">TLM</option>
                    <option value="WLUNA">WLUNA</option>
                    <option value="UST">UST</option>
                    <option value="KLAY">KLAY</option>
                    <option value="LINA">LINA</option>
                    <option value="RAY">RAY</option>
                    <option value="FTT">FTT</option>
                    <option value="AKRO">AKRO</option>
                    <option value="MCO2">MCO2</option>
                    <option value="1000XEC">1000XEC</option>
                    <option value="CELR">CELR</option>
                    <option value="BLZ">BLZ</option>
                    <option value="SC">SC</option>
                    <option value="ONE">ONE</option>
                    <option value="SFP">SFP</option>
                    <option value="DEFI">DEFI</option>
                    <option value="NEO">NEO</option>
                    <option value="CTK">CTK</option>
                    <option value="CHR">CHR</option>
                    <option value="ALPHA">ALPHA</option>
                    <option value="AR">AR</option>
                    <option value="CTX">CTX</option>
                    <option value="RUNE">RUNE</option>
                    <option value="GNT">GNT</option>
                    <option value="ICX">ICX</option>
                    <option value="RUB">RUB</option>
                    <option value="RSR">RSR</option>
                    <option value="SRM">SRM</option>
                    <option value="BAKE">BAKE</option>
                    <option value="BTT">BTT</option>
                    <option value="HBAR">HBAR</option>
                    <option value="DGB">DGB</option>
                    <option value="XEM">XEM</option>
                    <option value="BZRX">BZRX</option>
                    <option value="BEL">BEL</option>
                    <option value="RVN">RVN</option>
                    <option value="GUSD">GUSD</option>
                    <option value="SLP">SLP</option>
                    <option value="PAXG">PAXG</option>
                    <option value="BTCST">BTCST</option>
                    <option value="CUBE">CUBE</option>
                </select>
                <button onClick={this.handleConversion}>Convert</button>
                {this.state.clicked ? <div className = "exchangeRate"><p>{this.state.exchangeRate['rate']}</p></div> : <></>}
            </div>
        )
    }

}