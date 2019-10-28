import { Message } from 'element-ui';

/**
 *
 * @param message
 * @param type success, warning, error
 */
export const showMsg = (message, type) => {
    Message.error(message)

    //todo 如何在获取到vue这个this对象
    // this.$message({
    //     showClose: true,
    //     message,
    //     type
    // });
}