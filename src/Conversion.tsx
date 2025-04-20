import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { CurrencyDropdown } from "./CurrencyDropdown"; 
import { useEffect, useState } from "react";

const currs:Array<string> = JSON.parse(
  '["USD","AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","FOK","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KID","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLE","SLL","SOS","SRD","SSP","STN","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS","UAH","UGX","UYU","UZS","VES","VND","VUV","WST","XAF","XCD","XDR","XOF","XPF","YER","ZAR","ZMW","ZWL"]'
    );

function Conversion(data:any) {
  const [val, setVal] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [fromCurr, setFromCurr] = useState<number>(0);
  const [toCurr, setToCurr] = useState<number>(0);

  useEffect(() => {
    if(data.data.rates==undefined) return;
    reevaluate(); 
  }, [toCurr, fromCurr, val]);

  function reevaluate(){
    setResult((val/data.data.rates[currs[fromCurr]])*data.data.rates[currs[toCurr]]);
  }
  return (
  <>
  <Form noValidate validated={false}>
  <Container>
    <Row>
      <Col lg={6} md={6} sm={12}>
      <Form.Group>
        <InputGroup className="mb-3">
          <InputGroup.Text>Convert:</InputGroup.Text>
          <CurrencyDropdown curr={currs[fromCurr]} setCurr={setFromCurr}/>
          <Form.Control type="number" onInput={(e:any)=>setVal(e.target.value)} required defaultValue="0" placeholder="00.00"/>
      </InputGroup>
    </Form.Group>
      </Col>
      <Col lg={6} md={6} sm={12}>
    <InputGroup className="mb-3">
      <InputGroup.Text >To:</InputGroup.Text>
      <CurrencyDropdown curr={currs[toCurr]} setCurr={setToCurr}/>
      <Form.Control readOnly placeholder={result.toString()} />
    </InputGroup>
      </Col>
    </Row>
  </Container>
  </Form>
  </>
  );
}
export default Conversion;
