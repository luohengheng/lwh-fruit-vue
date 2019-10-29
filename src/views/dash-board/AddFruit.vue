<template>
    <div class="add-fruit-wrap">
        <el-form :model="fruitModel" :rules="rules" ref="ruleForm" label-width="100px" class="add-fruit-from">
            <el-form-item label="水果名称" prop="name">
                <el-input v-model="fruitModel.name"></el-input>
            </el-form-item>
            <el-form-item label="水果价格" prop="price">
                <el-input v-model="fruitModel.price"></el-input>
            </el-form-item>
            <el-form-item label="水果当前价" prop="curPrice">
                <el-input v-model="fruitModel.curPrice"></el-input>
            </el-form-item>
            <el-form-item label="水果种类" prop="fruitType">
                <el-select v-model="fruitModel.fruitType" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="水果正文" prop="content">
                <el-input type="textarea" v-model="fruitModel.content" maxlength="20" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="水果介绍" prop="introduce">
                <el-input type="textarea" v-model="fruitModel.introduce" maxlength="40" rows="4" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="水果图片" prop="imgUrl">
                <el-upload
                        action="singleUpload"
                        headers=""
                        list-type="picture-card"
                        limit="1"
                        :on-preview="handlePictureCardPreview"
                        :on-success="handlePictureCardSuc"
                        :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {singleUpload} from '@/config/config'

    export default {
        name: "AddFruit",
        data() {
            return {
                fruitModel: {
                    headers: {
                        Authorization: localStorage.fToken
                    },
                    name: '',
                    fruitType: '',
                    price: '',
                    curPrice: '',
                    content: '',
                    introduce: '',

                },
                rules: {}
            }
        },
        methods: {
            submitForm() {

            },
            resetForm() {

            },
            handlePictureCardPreview() {

            },
            handlePictureCardSuc(response, file, fileList) {
                console.log(response)
                fileList = []
                console.log(fileList)
            },
            handleRemove() {

            }
        }

    }
</script>

<style scoped lang="less">
    .add-fruit-wrap{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        padding-top: 50px;
        background-color: #f6f6f6;
    }

    .add-fruit-from{
        width: 450px;
    }

    .el-select {
        width: 100%;
    }
    .el-form-item__content {
        text-align: left !important;
    }
</style>