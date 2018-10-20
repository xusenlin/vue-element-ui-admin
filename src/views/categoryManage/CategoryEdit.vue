<template>
    <div class="category-dialog">
        <el-dialog :title="title" :visible="dialogFormVisible" :show-close="false" width="45%">
            <el-form :model="form">
                <el-form-item label="分类名称" >
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类描述" >
                    <el-input v-model="form.comment" type="textarea" :rows="3" placeholder="请输入备注说明"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="$emit('cancel');">取 消</el-button>
                <el-button type="primary" :loading="btnLoading" @click="btnOk">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'CategoryEdit',
        props: {
            dialogFormVisible:Boolean,
            data: [Object,Boolean],
            title:String,
            departTree:Array,
        },
        data() {
            return {
              props: {
                value:'id',
                label: 'name',
                children: 'children'
              },
                form: {
                  id:null,
                  name:'',
                  pid:'',
                  comment:'',
                },
              btnLoading:false,
            }
        },
        watch: {
            'data': {
                handler: function () {
                    if(this.data){
                        for (let k in this.form){
                          this.form[k] = this.data[k];
                        }
                    }else {
                      for (let k in this.form){
                        this.form[k] = '';
                      }
                    }
                },
                deep: true
            }
        },
        methods: {
          handleChange(){},
            btnOk(){
                let errorMsg = false;
                let formData = this.form;

                if(formData.name && formData.name.length <=2) errorMsg = '分类名称必须大于2个字符';

                if(errorMsg) {
                    this.$message.error(errorMsg);
                    return ;
                }

                this.$emit('val-change',this.form);
                this.btnLoading = true;
                setTimeout(()=>{this.btnLoading = false},1000)
            },

        },
        components: {

        }
    }
</script>
<style lang="less">
    .category-dialog{
        .el-cascader{
            width: 100%;
        }
    }
</style>
