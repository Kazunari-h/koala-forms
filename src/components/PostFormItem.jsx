import React from "react"
import PropTypes from "prop-types"

const PostFormItem = ({ title, children }) => {
    return (
        <label className="block mt-4">
            <span class="text-gray-700">{ title }</span>
            { children }
        </label>
    )
    
}


PostFormItem.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PostFormItem
