document.addEventListener(
  "DOMContentLoaded",
  () => {
    const body = document.body;
    const header: HTMLElement = body.querySelector(".header");

    const ACTIVE_CLASS: String = "_active";

    // const headerMenu: HTMLElement = header.querySelector(".headerMenu");
    // setTimeout(() => {
    //   headerMenu.classList.add("_loaded");
    // }, 100);

    header.addEventListener("click", (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (header.offsetWidth < 1180) {
        if (target.closest(".headerMenuParent")) {
          target.closest(".headerMenuParent").classList.add(`${ACTIVE_CLASS}`);
        }
        if (target.closest(".headerMenuBtnBack")) {
          target
            .closest(".headerMenuParent")
            .classList.remove(`${ACTIVE_CLASS}`);
        }
        if (target.closest(".headerMenuOpen")) {
          header.classList.add("_menu_open");
        }
        if (target.closest(".headerMenuClose")) {
          menuClose();
        }
      } else {
        if (target.closest(".headerMenuParentL1")) {
          const parentL1: HTMLElement = target.closest(".headerMenuParentL1");
          const parentL2: HTMLElement = parentL1.querySelector(
            ".headerMenuParentL2"
          );
          if (!parentL1.classList.contains(`${ACTIVE_CLASS}`)) {
            clearHeaderActiveElement();
            if (header.classList.contains("_menu_open")) {
              setTimeout(() => {
                if (parentL2) {
                  parentL2.classList.add(`${ACTIVE_CLASS}`);
                }

                parentL1.classList.add(`${ACTIVE_CLASS}`);
              }, 500);
            } else {
              header.classList.add("_menu_open");
              if (parentL2) {
                parentL2.classList.add(`${ACTIVE_CLASS}`);
              }

              parentL1.classList.add(`${ACTIVE_CLASS}`);
            }
          }
        }

        if (target.closest(".headerOverlay")) {
          menuClose();
        }
      }
    });

    const headerMenuChildrensLeftAll: NodeList = header.querySelectorAll(
      ".headerMenuChildrensL1Left"
    );
    headerMenuChildrensLeftAll.forEach((el: HTMLElement) => {
      el.addEventListener("mouseover", (e: MouseEvent) => {
        if (header.offsetWidth >= 1180) {
          const target = e.target as HTMLElement;
          if (
            target.closest(".headerMenuBtnL2") &&
            !target.closest(".headerMenuChildrensL1LeftGold")
          ) {
            el.querySelector("._active").classList.remove(`${ACTIVE_CLASS}`);
            target
              .closest(".headerMenuParentL2 ")
              .classList.add(`${ACTIVE_CLASS}`);
          }
        }
      });
    });

    function clearHeaderActiveElement() {
      const activeElements: NodeList = header.querySelectorAll(
        `.${ACTIVE_CLASS}`
      );
      activeElements.forEach((el: HTMLElement) => {
        el.classList.remove(`${ACTIVE_CLASS}`);
      });
      console.log(activeElements);
    }
    function menuClose() {
      clearHeaderActiveElement();
      header.classList.remove("_menu_open");
    }
  },
  {
    passive: true,
    once: true,
  }
);
