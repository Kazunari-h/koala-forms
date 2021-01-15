import React from "react"
import View from "../components/View"
import PostFormItem from "../components/PostFormItem"

const PostForm = () => {
    return (
        <View title="投稿画面">
            <div>
                <PostFormItem title="タイトル">
                    <input type="text" className="form-input mt-1 block w-full" />
                </PostFormItem>
                <PostFormItem title="入力タイプ1">
                    <select className="form-select block w-full mt-1">
                        <option>
                            テキストボックス
                        </option>
                        <option>
                            複数行テキストボックス                            
                        </option>
                    </select>
                </PostFormItem>
            </div>
        </View>
    )
}

export default PostForm
