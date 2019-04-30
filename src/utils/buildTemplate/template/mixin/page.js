
import {pageList} from '@/api/user.js'
export default {
    data() {
        return {
            requestFunc:pageList,
            searchParams: {
                postTitle: '',
                postType: '',
                postStatus: 'published',
            },
        }
    },
    methods: {
        returnData(pageList){
            console.log(pageList)
        }
    },
}
