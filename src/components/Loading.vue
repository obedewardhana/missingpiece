<template>
    <div>
        <v-overlay style="z-index:100">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </div>
</template>
<script>
export default{
    name:'LoadingComp',
    data: () => ({

    })
}
</script>