<template>
  <teleport to="body">
      <div class="sidebar">
        <ul>
          <template v-for="item in sidebarItems" :key="item.key">
            <li @click="toggleChildren(item)" :class="{ 'selected': item.selected }">
              {{ item.text }}
            </li>
            <ul v-if="item.showChildren">
              <template v-for="child in item.children" :key="child.key">
                <li @click="toggleChildren(child)" :class="{ 'selected': child.selected }">
                  {{ child.text }}
                </li>
                <ul v-if="child.showChildren">
                  <template v-for="subChild in child.children" :key="subChild.key">
                    <li @click="toggleChildren(subChild)" :class="{ 'selected': subChild.selected }">
                      {{ subChild.text }}
                    </li>
                  </template>
                </ul>
              </template>
            </ul>
          </template>
        </ul>
      </div>
    </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface SidebarItem {
  key: string;
  text: string;
  showChildren: boolean;
  selected: boolean;
  children?: SidebarItem[];
}

const isSidebarOpen = ref(false);
const sidebarItems = ref([
  {
    key: "64f",
    text: "好喝黑糖",
    showChildren: false,
    children: [
      {
        key: "445",
        text: "黑糖鮮奶",
        children: [
          {
            key: "37a",
            text: "黑糖珍珠鮮奶"
          },
          {
            key: "feb",
            text: "黑糖芋圓鮮奶"
          },
          {
            key: "59c",
            text: "黑糖蒟蒻鮮奶"
          }
        ]
      },
      {
        key: "29e",
        text: "黑糖冬瓜",
        children: [
          {
            key: "ac3",
            text: "黑糖冬瓜牛奶"
          },
          {
            key: "ca0",
            text: "黑糖冬瓜珍珠"
          }
        ]
      }
    ]
  },
  {
    key: "6c3",
    text: "茶",
    showChildren: false,
    children: [
      {
        key: "5dc",
        text: "烏龍綠"
      },
      {
        key: "b5f",
        text: "綠茶"
      },
      {
        key: "b09",
        text: "紅茶"
      },
      {
        key: "887",
        text: "青茶"
      }
    ]
  },
  {
    key: "c81",
    text: "咖啡",
    showChildren: false,
    children: [
      {
        key: "e02",
        text: "黑咖啡",
        children: [
          {
            key: "d20",
            text: "濃縮咖啡"
          },
          {
            key: "1f8",
            text: "美式咖啡"
          }
        ]
      },
      {
        key: "d7a",
        text: "牛奶咖啡",
        children: [
          {
            key: "c09",
            text: "拿鐵",
            children: [
              {
                key: "db2",
                text: "黑糖拿鐵"
              },
              {
                key: "9f6",
                text: "榛果拿鐵"
              },
              {
                key: "b61",
                text: "香草拿鐵"
              }
            ]
          },
          {
            key: "9ac",
            text: "卡布奇諾"
          },
          {
            key: "ce8",
            text: "摩卡"
          }
        ]
      }
    ]
  }
] as SidebarItem[]);

const getSiblingSidbarItems = (item: SidebarItem): SidebarItem[] => {
  const parent: SidebarItem | null = getParentSidbarItem(item);
  if (parent === null) {
    return sidebarItems.value;
  }
  return parent.children as SidebarItem[];
};

const getParentSidbarItem = (target: SidebarItem, items: SidebarItem[] = sidebarItems.value): SidebarItem | null => {
  for (const item of items) {
    // 沒有找到：已經迭代到底部
    if (item.children === undefined) {
      return null;
    }
    // 回傳父項目
    if (item.children.includes(target)) {
      return item;
    } 
    const parent: SidebarItem | null = getParentSidbarItem(target, item.children);
    // 繼續迭代
    if (parent === null) {
      continue;
    }
    // 回傳父項目
    return parent;
  }
  // 沒有找到
  return null;
};

const toggleChildren = (item: SidebarItem) => {
  const siblingSideBarItems: SidebarItem[] = getSiblingSidbarItems(item);
  for (const siblingSideBarItem of siblingSideBarItems) {
    if (siblingSideBarItem === item) {
      item.showChildren = ! item.showChildren;
      item.selected = true;      
    } else {
      siblingSideBarItem.showChildren = false;
      siblingSideBarItem.selected = false;
    }
  }
};
</script>

<style scoped>
@media (min-width: 390px) {
  .sidebar {
    width: 50%;
    height: 100%;
    background-color: #333;
    color: #fff;
    opacity: 0.9;
    position: fixed;
    top: 0;
    right: 0;
    transition: left 0.3s ease;

    ul {
      padding-left: 10px;
      list-style-type: none;

      li {
        padding: 5px;

        &.selected {
          color: yellow;
        }
      }
    }
  }
}
</style>