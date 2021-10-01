<template>
    <div>
        <h5><b>Expense Category</b></h5>
        <div class="row" style="margin-top:30px">
            <form>
                <div class="form-group col-md-12">
                    <div>
                        <input type="text" class="form-control" placeholder="Enter category name" v-model="form.name">
                        <input type="hidden" v-model="form.id">
                    </div>
                    <div class="col-md-4">
                        <button type="submit" @click.prevent="createOrUpdate" class="btn btn-success mt-2">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="row" style="margin-top:30px">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cat, index) in category" :key="index">
                            <th>{{ cat.id }}</th>
                            <td>{{ cat.name }}</td>
                            <td>
                                <button @click.prevent="editCategory(cat)" class="btn btn-success btn-sm">Edit</button>
                                <button @click.prevent="deleteCategory(cat)" class="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                category: {
                    name: '',
                    id: ''
                },
                form: {
                    name: '',
                    id: ''
                }
            }
        },
        mounted() {
            this.getExpenseCategories()
        },
        methods: {
            getExpenseCategories() {
                axios.get('http://127.0.0.1:3333/expense-category')
                    .then(res => {
                        console.log(res.data)
                        this.category = res.data.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            editCategory(cat) {
                this.form.name = cat.name
                this.form.id = cat.id
            },
            createCategory() {
                axios.post('http://127.0.0.1:3333/expense-category', {
                    name: this.form.name})
                    .then(res => {
                        this.form.name = ''
                        console.log(res.data)
                        this.getExpenseCategories()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            updateCategory() {
                axios.put('http://127.0.0.1:3333/expense-category/'+this.form.id, {
                    name: this.form.name})
                    .then(res => {
                        this.form.name = ''
                        console.log(res.data)
                        this.getExpenseCategories()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            createOrUpdate() {
                if(this.form.id == ''){
                    this.createCategory()
                } else {
                    this.updateCategory()
                }
            },
            deleteCategory(cat) {
                axios.delete('http://127.0.0.1:3333/expense-category/'+cat.id)
                    .then(res => {
                        console.log(res.data)
                        this.getExpenseCategories()
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>