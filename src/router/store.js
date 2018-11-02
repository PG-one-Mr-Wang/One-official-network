export default{
  mutations: {
    breadListMutations(getters, list) {
      getters.breadListState = list;
      sessionStorage.setItem('breadListStorage', list);
    }
  },
  getters: {
    breadListState() {
	  return JSON.parse(sessionStorage.getItem('breadListStorage')) || [];
	 }
  }
};
