import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, computed, unref, withCtx, createTextVNode, ref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { d as useWebsiteStore, _ as _export_sfc } from '../server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const noPhoto = "" + buildAssetsURL("no-photo.jX76db-O.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, _attrs))}><path d="M1 1L13 13" stroke="#1F2432" stroke-width="1.5"></path><path d="M1 13L13 1" stroke="#1F2432" stroke-width="1.5"></path></svg>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconClose.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const IconClose = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(_attrs)} data-v-4b342aab>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CustomButton.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-4b342aab"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><rect width="50" height="50" rx="4" fill="white"></rect><path d="M33.6933 38.61C30.8529 38.61 28.5421 36.2992 28.5421 33.4589C28.5421 32.7656 28.6807 32.0892 28.9543 31.4484C29.4636 30.2325 30.4566 29.2345 31.6775 28.7139C31.6935 28.7071 31.7102 28.7009 31.7268 28.6956C32.346 28.4381 33.0071 28.3077 33.6933 28.3077C36.5337 28.3077 38.8448 30.6185 38.8448 33.4589C38.8448 36.2992 36.5337 38.61 33.6933 38.61ZM32.091 29.7922C31.162 30.2004 30.4076 30.9658 30.0171 31.8977C29.8036 32.3983 29.696 32.9222 29.696 33.4589C29.696 35.6629 31.4893 37.4562 33.6933 37.4562C35.8976 37.4562 37.6909 35.6629 37.6909 33.4589C37.6909 31.2548 35.8976 29.4615 33.6933 29.4615C33.1474 29.4615 32.6234 29.5672 32.1358 29.7753C32.1212 29.7815 32.1062 29.7872 32.091 29.7922Z" fill="#0069B4"></path><path d="M16.5412 21.4564C16.2502 21.4564 15.9569 21.4325 15.6639 21.3843C13.4413 21.0176 11.699 19.1919 11.4272 16.9447C11.3472 16.2853 11.3905 15.6303 11.5559 14.9985C11.608 14.7985 11.7635 14.6415 11.963 14.5875C12.1624 14.5331 12.3759 14.5903 12.5219 14.7365L14.6715 16.8859H16.4981L17.2863 16.0977V14.2711L15.2397 12.2243C15.0893 12.0738 15.0338 11.8527 15.0955 11.649C15.1572 11.4457 15.3259 11.2924 15.5344 11.2507C15.8558 11.1865 16.1938 11.1538 16.5395 11.1538C19.3799 11.1538 21.6909 13.4646 21.6909 16.305C21.6909 16.9918 21.5549 17.6667 21.2861 18.311C20.7678 19.5338 19.7728 20.5311 18.5556 21.05C18.539 21.057 18.5221 21.0632 18.5052 21.0688C17.8863 21.326 17.2198 21.4564 16.5412 21.4564ZM18.3294 20.5192H18.335H18.3294ZM12.543 16.3892C12.5458 16.5275 12.5557 16.6667 12.5726 16.8061C12.7833 18.5476 14.1318 19.962 15.8518 20.2457C16.6279 20.3736 17.4037 20.2851 18.0967 19.9888C18.1119 19.9823 18.1274 19.9764 18.1429 19.9713C19.07 19.5637 19.8266 18.7978 20.2227 17.8636C20.4309 17.3642 20.5371 16.8385 20.5371 16.305C20.5371 14.2491 18.977 12.551 16.9786 12.3316L18.2711 13.6243C18.3793 13.7325 18.4401 13.8793 18.4401 14.0322V16.3365C18.4401 16.4895 18.3793 16.6363 18.2711 16.7444L17.1448 17.8707C17.0367 17.9789 16.8899 18.0397 16.7369 18.0397H14.4326C14.2797 18.0397 14.1329 17.9789 14.0247 17.8707L12.543 16.3892Z" fill="#0069B4"></path><path d="M31.902 29.8192C31.7541 29.8192 31.6065 29.7629 31.4938 29.6499L28.0844 26.2346C27.8593 26.0089 27.8596 25.6439 28.085 25.4188C28.3106 25.194 28.6757 25.1934 28.9008 25.4193L32.3102 28.8347C32.5356 29.0603 32.535 29.4254 32.3096 29.6505C32.197 29.7629 32.0496 29.8192 31.902 29.8192Z" fill="#0069B4"></path><path d="M24.1712 22.0887C24.0234 22.0887 23.8757 22.0323 23.7631 21.9194L20.3477 18.4981C20.1224 18.2725 20.1229 17.9074 20.3483 17.6823C20.5739 17.4572 20.939 17.4572 21.1641 17.6829L24.5794 21.1041C24.8048 21.3298 24.8042 21.6948 24.5789 21.9199C24.4662 22.0323 24.3186 22.0887 24.1712 22.0887Z" fill="#0069B4"></path><path d="M21.7485 24.5174C21.6009 24.5174 21.4533 24.4611 21.3406 24.3484L17.9194 20.9275C17.694 20.7021 17.694 20.337 17.9194 20.1116C18.1447 19.8863 18.5098 19.8863 18.7352 20.1116L22.1564 23.5326C22.3818 23.758 22.3818 24.1231 22.1564 24.3484C22.0438 24.4611 21.8962 24.5174 21.7485 24.5174Z" fill="#0069B4"></path><path d="M29.4848 32.254C29.3372 32.254 29.1896 32.1976 29.0769 32.0849L25.6559 28.6637C25.4306 28.4383 25.4306 28.0732 25.6559 27.8479C25.8813 27.6225 26.2464 27.6225 26.4717 27.8479L29.8927 31.2691C30.1181 31.4945 30.1181 31.8596 29.8927 32.0849C29.78 32.1976 29.6324 32.254 29.4848 32.254Z" fill="#0069B4"></path><path d="M34.854 36.0454H32.5327C32.3265 36.0454 32.1361 35.9355 32.033 35.7569L30.8724 33.7467C30.7696 33.5681 30.7696 33.3484 30.8724 33.1698L32.033 31.1593C32.1361 30.9807 32.3265 30.8708 32.5327 30.8708H34.854C35.0602 30.8708 35.2506 30.9807 35.3537 31.1593L36.5143 33.1698C36.6171 33.3484 36.6171 33.5681 36.5143 33.7467L35.3537 35.7569C35.2506 35.9355 35.0602 36.0454 34.854 36.0454ZM32.8657 34.8915H34.521L35.3483 33.4583L34.5207 32.0247H32.866L32.0384 33.4583L32.8657 34.8915Z" fill="#0069B4"></path><path d="M24.3616 30.2233C24.0216 30.2233 23.6819 30.094 23.423 29.8351L20.1654 26.5835C19.6541 26.0615 19.6541 25.2231 20.1595 24.7079L32.6307 12.2365C34.0234 10.8502 36.2835 10.8508 37.6694 12.2365L37.7554 12.317C39.1568 13.7179 39.1568 15.9786 37.7675 17.3676L25.3002 29.8351C25.0414 30.094 24.7016 30.2233 24.3616 30.2233ZM35.1479 12.3514C34.5307 12.3514 33.9152 12.5858 33.4456 13.0534L20.9784 25.5209C20.9147 25.5857 20.9147 25.6995 20.9835 25.7696L24.2388 29.0193C24.3075 29.0881 24.4157 29.0881 24.4844 29.0193L36.9517 16.5518C37.4063 16.0972 37.6568 15.4921 37.6568 14.8484C37.6568 14.2044 37.4063 13.5993 36.9517 13.1447L36.8657 13.0641C36.39 12.5883 35.7682 12.3514 35.1479 12.3514Z" fill="#0069B4"></path><path d="M13.245 38.8462C13.0957 38.8462 12.9481 38.7884 12.8368 38.6771L11.3247 37.1647C11.1359 36.9759 11.1013 36.6827 11.2407 36.4554L13.1856 33.2828C13.3859 32.9561 13.7171 32.729 14.0941 32.6597C14.4698 32.5893 14.8603 32.6848 15.164 32.9192C15.2414 32.9792 15.2825 33.0152 15.3209 33.0538L16.7747 34.5077C16.8051 34.5381 16.8342 34.5702 16.8618 34.6037L17.0395 34.8218C17.286 35.1238 17.39 35.5179 17.3249 35.9021C17.2595 36.2869 17.0316 36.6244 16.6989 36.8283L13.5461 38.7611C13.4529 38.8183 13.3487 38.8462 13.245 38.8462ZM12.4622 36.6706L13.3309 37.5396L16.0958 35.8449C16.1623 35.8041 16.1815 35.7424 16.1871 35.7091C16.1927 35.6762 16.195 35.6117 16.1454 35.5508L15.9589 35.3235L14.5051 33.8696C14.5045 33.8693 14.4591 33.8327 14.4586 33.8324C14.3983 33.7857 14.3358 33.7899 14.3022 33.7947C14.2698 33.8006 14.2093 33.8203 14.1693 33.886L12.4622 36.6706Z" fill="#0069B4"></path><path d="M14.6467 33.7724C14.499 33.7724 14.3514 33.7161 14.2388 33.6034C14.0134 33.378 14.0134 33.0126 14.2388 32.7876L20.7151 26.3124C20.9404 26.087 21.3055 26.087 21.5309 26.3124C21.7562 26.5378 21.7562 26.9031 21.5309 27.1282L15.0546 33.6034C14.9419 33.7161 14.7943 33.7724 14.6467 33.7724Z" fill="#0069B4"></path><path d="M16.8052 35.9309C16.6576 35.9309 16.5099 35.8746 16.3973 35.7619C16.1719 35.5365 16.1719 35.1712 16.3973 34.9461L22.8736 28.4712C23.0989 28.2458 23.464 28.2458 23.6894 28.4712C23.9147 28.6966 23.9147 29.0619 23.6894 29.287L17.2131 35.7619C17.1004 35.8746 16.9528 35.9309 16.8052 35.9309Z" fill="#0069B4"></path><path d="M24.3601 26.2177C24.2125 26.2177 24.0649 26.1614 23.9522 26.0487C23.7269 25.8233 23.7269 25.4582 23.9522 25.2329L34.745 14.4401C34.9704 14.2147 35.3355 14.2147 35.5608 14.4401C35.7862 14.6654 35.7862 15.0305 35.5608 15.2559L24.768 26.0487C24.6553 26.1614 24.5077 26.2177 24.3601 26.2177Z" fill="#0069B4"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconLabel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconLabel = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "salesList",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useWebsiteStore();
    const installation = computed({
      get() {
        return store.installation;
      },
      set(value) {
        store.changeInstallation(value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "sales" }, _attrs))} data-v-2c258f3c><div data-v-2c258f3c><div class="sales-header" data-v-2c258f3c><h1 class="sales-title" data-v-2c258f3c>\u0412\u0430\u0448\u0430 \u043A\u043E\u0440\u0437\u0438\u043D\u0430</h1><div class="sales-header__count" data-v-2c258f3c>${ssrInterpolate(unref(store).countAllItems)} \u0442\u043E\u0432\u0430\u0440\u0430</div><button type="button" data-v-2c258f3c>\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443</button></div><div class="sales-list" data-v-2c258f3c><!--[-->`);
      ssrRenderList(unref(store).salesList, (item) => {
        _push(`<div class="sales-item" data-v-2c258f3c><div class="sales-item__img" data-v-2c258f3c><img${ssrRenderAttr("src", unref(noPhoto))} alt="no-photo" data-v-2c258f3c></div><div class="sales-item__text" data-v-2c258f3c><div class="sales-item__text-name" data-v-2c258f3c>${ssrInterpolate(item.name)}</div><div class="sales-item__text-description" data-v-2c258f3c>${ssrInterpolate(item.description)}</div><div class="sales-item__text-article" data-v-2c258f3c>${ssrInterpolate(item.article)}</div></div><div class="sales-item__counter" data-v-2c258f3c><button type="button" class="sales-item__counter-btn" data-v-2c258f3c>- </button><div class="sales-item__counter-value" data-v-2c258f3c>${ssrInterpolate(item.count)}</div><button type="button" class="sales-item__counter-btn" data-v-2c258f3c>+ </button>`);
        if (item.count > 1) {
          _push(`<div class="sales-item__counter-one" data-v-2c258f3c>${ssrInterpolate(item.price)} \u20BD/\u0448\u0442. </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="sales-item__price" data-v-2c258f3c>${ssrInterpolate(item.price * item.count)} \u20BD</div><button class="sales-item__close" data-v-2c258f3c>`);
        _push(ssrRenderComponent(IconClose, null, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]--></div><label class="sales-list-label" data-v-2c258f3c><input type="checkbox"${ssrRenderAttr("value", unref(installation))}${ssrIncludeBooleanAttr(Array.isArray(unref(installation)) ? ssrLooseContain(unref(installation), unref(installation)) : unref(installation)) ? " checked" : ""} data-v-2c258f3c>`);
      _push(ssrRenderComponent(IconLabel, null, null, _parent));
      _push(`<div data-v-2c258f3c><div style="${ssrRenderStyle({ "font-weight": "700" })}" data-v-2c258f3c>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430</div><div style="${ssrRenderStyle({ "font-size": "0.875rem" })}" data-v-2c258f3c>\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435, \u0435\u0441\u043B\u0438 \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0430 \u043F\u043E \u043C\u043E\u043D\u0442\u0430\u0436\u0443 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432.</div></div></label></div><div class="sales-total" data-v-2c258f3c><div class="sales-total-title" data-v-2c258f3c> \u0418\u0442\u043E\u0433\u043E </div><div class="sales-total-item" data-v-2c258f3c><div data-v-2c258f3c>\u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430</div><div data-v-2c258f3c>${ssrInterpolate(unref(store).priceAllItems)}</div></div><div class="sales-total-item" data-v-2c258f3c><div data-v-2c258f3c>\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E</div><div data-v-2c258f3c>${ssrInterpolate(unref(store).countAllItems)} \u0448\u0442</div></div><div class="sales-total-item" data-v-2c258f3c><div data-v-2c258f3c>\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430</div><div data-v-2c258f3c>${ssrInterpolate(unref(store).installation ? "\u0434\u0430" : "\u043D\u0435\u0442")}</div></div><div class="sales-total__price" data-v-2c258f3c><div data-v-2c258f3c>\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u043E\u0432</div><div data-v-2c258f3c><div data-v-2c258f3c>${ssrInterpolate(unref(store).installation ? Math.floor(unref(store).priceAllItems * 1.2) : unref(store).priceAllItems)}</div></div></div>`);
      _push(ssrRenderComponent(__nuxt_component_0, {
        type: "submit",
        class: "primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437`);
          } else {
            return [
              createTextVNode("\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(__nuxt_component_0, {
        type: "button",
        class: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041A\u0443\u043F\u0438\u0442\u044C \u0432 1 \u043A\u043B\u0438\u043A`);
          } else {
            return [
              createTextVNode("\u041A\u0443\u043F\u0438\u0442\u044C \u0432 1 \u043A\u043B\u0438\u043A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/salesList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SalesList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-2c258f3c"]]);
const noPhotoSwiper = "" + buildAssetsURL("no-photo-swiper.XfEDiRv-.png");
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "50",
    height: "50",
    viewBox: "0 0 50 50",
    fill: "none"
  }, _attrs))}><circle cx="25" cy="25" r="25" transform="rotate(-180 25 25)" fill="#90A2B5"></circle><path d="M28 34L20 25L28 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/IconSwiper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "salesSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useWebsiteStore();
    const modules = [Pagination, Navigation];
    const prev = ref(null);
    const next = ref(null);
    const pagination = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_custom_button = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sales-swiper" }, _attrs))} data-v-bd3f83c3><h2 class="sales-swiper-title" data-v-bd3f83c3>\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B</h2>`);
      _push(ssrRenderComponent(unref(Swiper), {
        "slides-per-view": 1,
        breakpoints: { 600: { slidesPerView: 2 }, 900: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } },
        "space-between": 20,
        navigation: {
          prevEl: prev.value,
          nextEl: next.value
        },
        modules,
        pagination: { clickable: true, type: "fraction", el: pagination.value }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(store).salesSwiper, (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), { class: "sales-swiper-item" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="sales-swiper-item__img" data-v-bd3f83c3${_scopeId2}><img${ssrRenderAttr("src", unref(noPhotoSwiper))} alt="noPhotoSwiper" data-v-bd3f83c3${_scopeId2}></div><div class="sales-swiper-item__text" data-v-bd3f83c3${_scopeId2}><div style="${ssrRenderStyle({ "font-weight": "700", "font-size": "1.325rem" })}" data-v-bd3f83c3${_scopeId2}>${ssrInterpolate(item.name)}</div><div style="${ssrRenderStyle({ "font-size": ".875rem", "margin-top": "0.5rem" })}" data-v-bd3f83c3${_scopeId2}>${ssrInterpolate(item.description)}</div></div><div style="${ssrRenderStyle({ "font-weight": "700", "font-size": "1.5rem" })}" data-v-bd3f83c3${_scopeId2}>${ssrInterpolate(item.priceRu.first)} \u20BD - ${ssrInterpolate(item.priceRu.second)} \u20BD </div><div data-v-bd3f83c3${_scopeId2}>${ssrInterpolate(item.priceEu.first)} \u20AC - ${ssrInterpolate(item.priceEu.second)} \u20AC</div>`);
                    _push3(ssrRenderComponent(_component_custom_button, { class: "primary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435`);
                        } else {
                          return [
                            createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "sales-swiper-item__img" }, [
                        createVNode("img", {
                          src: unref(noPhotoSwiper),
                          alt: "noPhotoSwiper"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "sales-swiper-item__text" }, [
                        createVNode("div", { style: { "font-weight": "700", "font-size": "1.325rem" } }, toDisplayString(item.name), 1),
                        createVNode("div", { style: { "font-size": ".875rem", "margin-top": "0.5rem" } }, toDisplayString(item.description), 1)
                      ]),
                      createVNode("div", { style: { "font-weight": "700", "font-size": "1.5rem" } }, toDisplayString(item.priceRu.first) + " \u20BD - " + toDisplayString(item.priceRu.second) + " \u20BD ", 1),
                      createVNode("div", null, toDisplayString(item.priceEu.first) + " \u20AC - " + toDisplayString(item.priceEu.second) + " \u20AC", 1),
                      createVNode(_component_custom_button, { class: "primary" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="sales-swiper-others" data-v-bd3f83c3${_scopeId}><div class="prev" data-v-bd3f83c3${_scopeId}>`);
            _push2(ssrRenderComponent(IconSwiper, null, null, _parent2, _scopeId));
            _push2(`</div><div data-v-bd3f83c3${_scopeId}></div><div class="next" data-v-bd3f83c3${_scopeId}>`);
            _push2(ssrRenderComponent(IconSwiper, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(store).salesSwiper, (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), { class: "sales-swiper-item" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "sales-swiper-item__img" }, [
                      createVNode("img", {
                        src: unref(noPhotoSwiper),
                        alt: "noPhotoSwiper"
                      }, null, 8, ["src"])
                    ]),
                    createVNode("div", { class: "sales-swiper-item__text" }, [
                      createVNode("div", { style: { "font-weight": "700", "font-size": "1.325rem" } }, toDisplayString(item.name), 1),
                      createVNode("div", { style: { "font-size": ".875rem", "margin-top": "0.5rem" } }, toDisplayString(item.description), 1)
                    ]),
                    createVNode("div", { style: { "font-weight": "700", "font-size": "1.5rem" } }, toDisplayString(item.priceRu.first) + " \u20BD - " + toDisplayString(item.priceRu.second) + " \u20BD ", 1),
                    createVNode("div", null, toDisplayString(item.priceEu.first) + " \u20AC - " + toDisplayString(item.priceEu.second) + " \u20AC", 1),
                    createVNode(_component_custom_button, { class: "primary" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024);
              }), 256)),
              createVNode("div", { class: "sales-swiper-others" }, [
                createVNode("div", {
                  ref_key: "prev",
                  ref: prev,
                  class: "prev"
                }, [
                  createVNode(IconSwiper)
                ], 512),
                createVNode("div", {
                  ref_key: "pagination",
                  ref: pagination
                }, null, 512),
                createVNode("div", {
                  ref_key: "next",
                  ref: next,
                  class: "next"
                }, [
                  createVNode(IconSwiper)
                ], 512)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/salesSwiper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SalesSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bd3f83c3"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}>`);
      _push(ssrRenderComponent(SalesList, null, null, _parent));
      _push(ssrRenderComponent(SalesSwiper, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-gVLJWr7O.mjs.map
