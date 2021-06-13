import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import "./App.css";
import Username from "./Username";
import User from "./User";

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <h2 className="username">
            Username {/* replace this with the name from the state*/}
          </h2>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="content">
            <Router>
              <Switch>
                <Route path="/user">
                  <User />
                </Route>
                <Route path="/">
                  <Username />
                </Route>
              </Switch>
            </Router>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>goodluck</Footer>
      </Layout>
      ,
    </div>
  );
}

export default App;
