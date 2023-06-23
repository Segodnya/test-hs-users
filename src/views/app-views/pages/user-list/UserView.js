import React, { Component } from 'react';
import { Avatar, Drawer, Divider, Input, Button, Spin } from 'antd';
import { MobileOutlined, MailOutlined, UserOutlined, CompassOutlined } from '@ant-design/icons';

export default class UserView extends Component {
  state = {
    isEditMode: false,
    isSaving: false,
  };

  toggleEditMode = () => {
    this.setState((prevState) => ({
      isEditMode: !prevState.isEditMode,
    }));
  };

  handlePhoneChange = (e) => {
    const { data } = this.props;
    const newData = { ...data, phone: e.target.value };
    this.props.onDataChange(newData);
  };

  handleEmailChange = (e) => {
    const { data } = this.props;
    const newData = { ...data, email: e.target.value };
    this.props.onDataChange(newData);
  };

  handleAddressChange = (e) => {
    const { data } = this.props;
    const newData = { ...data, address: e.target.value };
    this.props.onDataChange(newData);
  };

  handleSave = () => {
    const { data } = this.props;
    this.setState({ isSaving: true });
    // сделать POST-запрос с отправкой data
    console.log(data);
    // ... Имитируем отправку в течение 1 секунды
    setTimeout(() => {
      this.setState({
        isEditMode: false,
        isSaving: false,
      });
      this.props.close();
    }, 1000);
  };

  render() {
    const { data, visible, close, onDataChange } = this.props;
    const { isEditMode, isSaving } = this.state;

    return (
      <Drawer width={300} placement="right" onClose={close} closable={false} open={visible}>
        <div className="text-center mt-3">
          <Avatar size={80} src={data?.img} />
          <h3 className="mt-2 mb-0">{data?.name}</h3>
        </div>
        <Divider dashed />
        <div className="">
          <h6 className="text-muted text-uppercase mb-3">Account details</h6>
          <p>
            <UserOutlined />
            <span className="ml-3 text-dark">id: {data?.id}</span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
          {isEditMode ? (
            <>
              <Input type="text" value={data?.phone} onChange={this.handlePhoneChange} />
              <Input type="text" value={data?.email} onChange={this.handleEmailChange} />
              <Input type="text" value={data?.address} onChange={this.handleAddressChange} />
            </>
          ) : (
            <>
              <p>
                <MobileOutlined />
                <span className="ml-3 text-dark">{data?.phone}</span>
              </p>
              <p>
                <MailOutlined />
                <span className="ml-3 text-dark">{data?.email ? data?.email : '-'}</span>
              </p>
              <p>
                <CompassOutlined />
                <span className="ml-3 text-dark">{data?.address}</span>
              </p>
            </>
          )}
        </div>
        <div className="mt-5">{isSaving ? <Spin /> : <>{isEditMode ? <Button onClick={this.handleSave}>Save</Button> : <Button onClick={this.toggleEditMode}>Edit profile</Button>}</>}</div>
      </Drawer>
    );
  }
}
