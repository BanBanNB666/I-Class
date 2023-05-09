<template>
    <section class="p-5 text-dark text-center text-sm-start">
        <div class="container">
            <div class="col-md-12 column">
                <div class="jumbotron">
                    <h1>
                        SQL录入
                    </h1>
                    <textarea name="reworkmes" cols="100" rows="7" style="OVERFLOW:   visible" class="form-control"
                        placeholder="输入SQL语句录入" aria-label="Username" aria-describedby="basic-addon1"></textarea>
                    <p>
                        <button class="btn btn-primary btn-lg my-4" data-toggle="modal" data-target="#myModal">
                            批量录入
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name:"enterSQL",
}
</script>