<script>
export default {
	asyncData({ redirect, store }) {
		redirect('/'+store.state.web);
	}
}
</script>