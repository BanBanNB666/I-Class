<template>
    <div class="input-group news-input">
        <div class="input-group mb-3">
            <input type="text" class="form-control " placeholder="Account" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
        <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Password" aria-label="Recipient's username"
                aria-describedby="basic-addon2">
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">注册</span>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'loginInput',
    props: {
        msg: String
    }
}
</script>