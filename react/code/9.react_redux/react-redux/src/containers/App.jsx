import React from 'react'
import {connect} from 'react-redux'

import {incrementCreator,decrementCreator} from '../redux/actions'
import Counter from '../components/Counter'

// 向外暴露Counter组件的包装组件
export default connect(
    (state) => (
        {number:state}
    ),
    {increment: incrementCreator, decrement: decrementCreator}
)(Counter)

