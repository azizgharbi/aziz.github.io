<template>
    <section class="section">
        <div class="container">

        <b-tabs>
            <b-tab-item label="Table">
                <b-table
                    :data="data"
                    paginated
                    per-page="5"
                    :checked-rows.sync="checkedRows"
                    checkable>
                     <template slot-scope="props">
        
            <b-table-column field="title" label="Posts title">
                {{ props.row.title }}
            </b-table-column>

            <b-table-column  label="Action">
                <router-link class="button" :to="{name: 'edit', params: { id: props.row.id } }"><i class="fas fa-edit"></i> &nbsp;Edit</router-link>
            </b-table-column>

        </template>
                    <template slot="bottom-left">
                        <a class="button is-danger" @click="deletePosts()" v-if="checkedRows.length"> <i class="fas fa-trash-alt"></i>&nbsp;Delete </a>
                    </template>
                </b-table>
            </b-tab-item>
        </b-tabs>
        <router-link class="button is-link is-small" :to="{name: 'create' }">
            Create more  <i class="fas fa-angle-right"></i>
        </router-link>
        </div>  
    </section>
</template>

<script>
//firebase
import {posts} from './../../config/posts.config'

    export default {
        data() {
            return {
                data : [],
                checkedRows: []
            }
        },
        methods:{
            deletePosts(){
                this.checkedRows.forEach(element => {
                    posts.child(element.id).remove()
                    this.data.splice(element.id,1)
                });
            }
        },
        created(){
            posts.on('child_added', post => this.data.push({...post.val(), id: post.key }))
        }
    }
</script>