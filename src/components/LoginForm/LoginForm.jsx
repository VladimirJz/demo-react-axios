import { Layout, Space } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor:'#f4f0ed',
  minHeight:'20vh',
  paddingInline: 50,
  lineHeight: '64px',
};
const contentStyle = {
  textAlign: 'center',
  //minHeight: 120,
  minHeight:'50vh',
  backgroundColor:'#f4f0ed',
  lineHeight: '120px',
  color: '#fff',
};

const footerStyle = {
  textAlign: 'center',
  color: 'black',
  backgroundColor:'#f4f0ed',
  minHeight:'27vh',
};
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
      <Header style={headerStyle}>Login</Header>
      <Content style={contentStyle}>
      <Form 
        name="basic" 
        labelCol={{ span: 8,}} 
        wrapperCol={{ span: 16,}}
        style={{maxWidth: 600,}}
        initialValues={{remember: true,}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
    <Form.Item
      label="Usuario"
      name="username"
      rules={[
        {
          required: true,
          message: 'Falta el nobre de usuario!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Ok, y el password?',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>



    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
   
  </Space>
);
export default App;