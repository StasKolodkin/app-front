import { computed, defineComponent, onMounted, ref, SetupContext  } from 'vue'
import { useStore } from 'vuex'
import { CraftStore } from '../../../types/Craft';
import { CategoryList, CategoryProperty } from '../../../types/Category';
import { Events } from '../../../events';

export default defineComponent({
  props: {
    cartItems: {
      type: Array as () => Array<{ id: number; uid: number; weight: number; materials: number; quantity: number }>,
      required: true
    }
  },
  emit: ['removeItem', 'emptyCart'],
  data(){
    return{
      // svg,
      // images
    }
  },
  setup(cartItems, { emit }: SetupContext){
    const store = useStore();

    const CraftData = computed(() => store.getters.getCraftData)

    const getCraftItemById = (uid: number) => {
      return store.getters.getCraftStore.find((item: CraftStore) => item.uid === uid);
    };

    const getCategoryName = (category: CategoryList): string => {
      return CategoryProperty[category].name;
    };

    const isLeftArrow = ref(false);
    const isRightArrow = ref(false);

    const handleMouseEnterLeftArrow = () => {
      isLeftArrow.value = true;
    };

    const handleMouseEnterRightArrow = () => {
      isRightArrow.value = true;
    };

    const handleMouseLeaveArrow = () => {
      isLeftArrow.value = false;
      isRightArrow.value = false;
    };

    const updateItem = (cartItem: { id: number; uid: number; weight: number; materials: number; quantity: number }) => {
      const originalItem = getCraftItemById(cartItem.uid);
      if (originalItem) {
        cartItem.weight = parseFloat((originalItem.weightAmount * cartItem.quantity).toFixed(2));
        cartItem.materials = parseFloat((originalItem.materialsAmount * cartItem.quantity).toFixed(2));
      }
    };
    
    const increaseQuantity = (cartItem: { id: number; uid: number; weight: number; materials: number; quantity: number }) => {
      cartItem.quantity++;
      updateItem(cartItem);
    };
    
    const decreaseQuantity = (cartItem: { id: number; uid: number; weight: number; materials: number; quantity: number }) => {
      if (cartItem.quantity > 0) {
        cartItem.quantity--;
        updateItem(cartItem);
        if (cartItem.quantity === 0) {
          updateItem(cartItem);
          emitRemoveItem(cartItem.uid);
        }
      }
    };
    
    const emitRemoveItem = (uid: number) => {
      setTimeout(() => {
        emit('removeItem', uid);
      }, 500);
    };
    
    const handleInputQuantityChange = (cartItem: { id: number; uid: number; weight: number; materials: number; quantity: number }) => {
      if (cartItem.quantity === 0) {
        updateItem(cartItem);
        emitRemoveItem(cartItem.uid);
      } else {
        updateItem(cartItem);
      }
    };

    const preventNonInteger = (event: KeyboardEvent) => {
      const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter'];

      if (!/^\d$/.test(event.key) && !allowedKeys.includes(event.key)) {
        event.preventDefault();
      }
    };

    const totalWeight = computed(() => {
      return parseFloat(cartItems.cartItems.reduce((sum, item) => sum + item.weight, 0).toFixed(2));
    });
    
    const totalMaterials = computed(() => {
      return parseFloat(cartItems.cartItems.reduce((sum, item) => sum + item.materials, 0).toFixed(2));
    });
    
    const isFailure = ref(false);

    const tryCrafting = () => {
      const itemsArray = cartItems.cartItems as Array<{ id: number; uid: number; weight: number; materials: number; quantity: number }>;

      if (itemsArray.length === 0) return;

      if (CraftData.value.weight > totalWeight.value || CraftData.value.materials > totalMaterials.value) {
        if (window.mp && window.mp.events) {
          window.mp.trigger(Events.MakingCrafting, itemsArray);
        }
        emptyCart(); //удалить
      } else {
        isFailure.value = true;
        setTimeout(() => {
          isFailure.value = false;
        }, 1000);
      }
    }

    const emptyCart = () => {
      setTimeout(() => {
        emit('emptyCart');
      }, 500);
    };

    onMounted(() => {
      if (window.mp && window.mp.events) {
        window.mp.events.add(Events.EmptyCart, emptyCart)
      }
    })
    
    return{
      getCraftItemById,
      getCategoryName,
      tryCrafting,
      increaseQuantity,
      decreaseQuantity,
      updateItem,
      totalWeight,
      totalMaterials,
      handleInputQuantityChange,
      isFailure,
      preventNonInteger,
      isLeftArrow,
      isRightArrow,
      handleMouseEnterLeftArrow,
      handleMouseEnterRightArrow,
      handleMouseLeaveArrow
    }
  }
});
