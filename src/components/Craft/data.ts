import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import CraftStore from './components/CraftStore/CraftStore.vue'
import CraftHistory from './components/CraftHistory/CraftHistory.vue'
import { Craft } from './types/Craft'
import { Events } from './events'

export default defineComponent({
  components: {
    CraftStore,
    CraftHistory
  },
  setup(){
    const store = useStore<Craft>();
    const CraftData = computed(() => store.getters.getCraftData)
    const isCrashStoreVisible = ref(true)

    const toggleView = (value: boolean) => {
      isCrashStoreVisible.value = value;
    };

    const exitCraft =() => {
      window.mp.trigger(Events.ExitCraft)
    }

    return{
      isCrashStoreVisible,
      toggleView,
      CraftData,
      exitCraft
    }
  }
});
