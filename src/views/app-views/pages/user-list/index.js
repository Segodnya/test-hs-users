import React, { Component } from 'react';
import { Card, Table, Tag, Tooltip, message, Button, Spin } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';

export class UserList extends Component {
  state = {
    users: [],
    userProfileVisible: false,
    selectedUser: null,
    loading: true,
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const users = data.map((user) => ({
          id: user.id,
          img: `https://i.pravatar.cc/150?img=${user.id}`,
          username: user.username,
          name: user.name,
          email: user.email,
          address: user.address.city,
          phone: user.phone,
        }));
        this.setState({ users, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        this.setState({ loading: false });
      });
  }

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  render() {
    const { users, userProfileVisible, selectedUser, loading } = this.state;

    const tableColumns = [
      {
        title: 'Username',
        dataIndex: 'username',
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.username.toLowerCase();
            b = b.username.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Address',
        dataIndex: 'address',
        sorter: {
          compare: (a, b) => {
            a = a.address.toLowerCase();
            b = b.address.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        render: (phone) => (
          <Tag className="text-capitalize" color={phone ? 'cyan' : 'red'}>
            {phone}
          </Tag>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.phone.toLowerCase();
            b = b.phone.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right d-flex justify-content-end">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showUserProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteUser(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];
    return (
      <Card bodyStyle={{ padding: '0px' }}>
        {loading ? (
          <div className="text-center py-4">
            <Spin />
          </div>
        ) : (
          <div className="table-responsive">
            <Table columns={tableColumns} dataSource={users} rowKey="id" />
          </div>
        )}
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={() => {
            this.closeUserProfile();
          }}
        />
      </Card>
    );
  }
}

export default UserList;
