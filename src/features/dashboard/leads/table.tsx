import Wrapper from "../../../components/table/wrapper";
import Header from "../../../components/table/header";
import Row from "../../../components/table/row";
import Data from "../../../components/table/data";
import Body from "../../../components/table/body";
import Head from "../../../components/table/head";
import Content from "../../../assets/leads.json";
import Actions from "./actions";
export default function Table() {
  return (
    <>
      <Wrapper key="wrapper">
        <Header key="header">
          <Row>
            <Head key="name">Name</Head>
            <Head key="email">Email</Head>
            <Head key="phone">Phone</Head>
            <Head key="company">Company</Head>
            <Head key="actions">Actions</Head>
          </Row>
        </Header>
        <Body>
          {Content.map((ele) => {
            return (
              <>
                <Row key={ele.id}>
                  <Data key={ele.id + "_name"}>{ele.name}</Data>
                  <Data key={ele.id + "_email"}>{ele.email}</Data>
                  <Data key={ele.id + "_phone"}>{ele.phone}</Data>
                  <Data key={ele.id + "_company"}>{ele.company}</Data>
                  <Data>
                    <Actions />
                  </Data>
                </Row>
              </>
            );
          })}
        </Body>
      </Wrapper>
    </>
  );
}
