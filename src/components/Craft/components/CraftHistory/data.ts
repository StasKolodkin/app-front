import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { Craft } from '../../types/Craft';

export default defineComponent({
  setup(){
    const store = useStore<Craft>();
    const CraftHistory = computed(() => store.getters.getCraftHistory)

    const searchHistory = ref("")

    const filteredCraftHistory = computed(() => {
      if (!searchHistory.value) {
        return CraftHistory.value;
      }
      return CraftHistory.value.filter((item: any) => 
        item.name.toLowerCase().includes(searchHistory.value.toLowerCase()) || 
        item.date.includes(searchHistory.value) || 
        item.quantity.toString().includes(searchHistory.value) ||
        item.listItem.some((listItem: any) => listItem.toLowerCase().includes(searchHistory.value.toLowerCase())) 
      );
    });

    return{
      CraftHistory,
      searchHistory,
      filteredCraftHistory 
    }
  }
});
