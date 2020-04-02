console.log("-- Dashboard included ! --")
import React from 'react'
import PropTypes from 'prop-types'
import ReactDynamicImport from "react-dynamic-import";

export default class Dashboard extends React.Component {
    static propTypes = {
      text: PropTypes.string
    }

    render() {
  
      const {
        text
      } = this.props
  
      let url =  '/Users/pajakoo/IdeaProjects/baf/clients/step-stone/src/components-store/dist/components/Test/Test.js';
      const loader = () => import(url);
      const LoadedComponent = ReactDynamicImport({ loader });
      return <div className="h-100 w-100">
         <LoadedComponent  />
      </div>

    }
  }
  