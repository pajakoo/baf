console.log("-- 2Dashboard included ! --")
import React from 'react'
import PropTypes from 'prop-types'
import ReactDynamicImport from "react-dynamic-import";

export default class Dashboard extends React.Component {
    static propTypes = {
      text: PropTypes.string
    }

    // https://github.com/webpack/webpack/issues/2031
    // https://github.com/babel/babel-loader/issues/171  
    //exclude node_modules
    
    render() {
  
      const {
        text
      } = this.props
  
      const loader = () => import('./components-store/Test/Test.js');
      const LoadedComponent = ReactDynamicImport({ loader });
      return <div className="h-100 w-100">
         <LoadedComponent  />
      </div>

    }
  }
  
  