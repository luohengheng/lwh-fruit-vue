<template>
  <div class="login-wrap">
    <div class="login-form">
        <div class="login-form-header">lwh水果商店</div>
        <el-form :label-position="labelPosition" :rules="loginFromRules" class="login-form-wrap"
                 label-width="80px" :model="loginForm" ref="loginForm">
            <el-form-item label="账号: " prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码: " prop="password">
                <el-input v-model="loginForm.password" type="password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item class="login-form-btns">
                <el-button class="submit-btn" type="primary" @click="submitForm('loginForm')">提交</el-button>
                <el-button class="submit-btn" @click="register">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>

export default {
    name: 'login',
    data() {
        return {
            labelPosition: 'right',
            loginForm: {
                username: '',
                password: ''
            },
            loginFromRules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    components: {

    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (!valid) {
                    this.$message.error('校验失败')
                } else {

                }
            });
        },

        register() {

        }
    }
}
</script>

<style scoped lang="less">
    .login-wrap{
        width: 100%;
        height: 100%;
        background-color: #00fff4;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .login-form{
        width: 400px;
        height: 300px;
        background-color: white;
        margin-right: 80px;
        border-radius: 10px;
        box-shadow: 1px 1px 11px #999999;

        .login-form-header{
            width: 100%;
            height: 80px;
            line-height: 80px;
            font-size: 24px;
            color: #333333;
            text-align: center;

        }

        .login-form-wrap{
            margin-right: 40px;
        }

        .login-form-btns{
            display: flex;
            justify-content: center;

            .submit-btn{
                width: 120px;
            }
        }
    }
</style>
