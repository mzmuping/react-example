import React from 'react';
import querystring from 'querystring';
import Data from '../../data';
export default class Detail extends React.Component {
  render() {
    console.log('this.props', this.props);
    const { type } = this.props;
    let params = {};
    switch (type) {
      case 'news':
        params = this.props.match.params;
        break;
      case 'list':
        params = this.props.location.state;
        break;
      default:
        const { search } = this.props.location;
        params = querystring.parse(search.slice(1));
    }

    const detailData = Data.find(ele => params.id === ele.id) || {};
    return (
      <div>
        <p>id:{detailData.id}</p>
        <p>title:{detailData.title}</p>
        <p>content:{detailData.content}</p>
      </div>
    );
  }
}
