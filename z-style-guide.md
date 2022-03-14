General style guide:
  2-tab or 4-tab?

# MERN CSS Style Guide

- Put the class name at the lowest possible level
- Name according to content, be specific
- Limit to (2) words if possible
- Do not abbreviate
- List key:val pairs on new line (not all in one string)
- Use comments to describe where and what if possible
  ```CSS
  /* || General styles */
  ...

  /* || Typography */
  ...

  /* || Header and Main Navigation */
  ...
  ```




### Optional - Group Determined

- Meaningful prefix
    - Visual components start with `c-` (layout)
    - Objects start with `o-` (buttons, etc)
    ```HTML
    <button class='c-layout'>
    <div class='c-layout-item c-grid o-button'></div>
    </button>
    ```


- Color palette standardized using SCSS

- BEM convention
    - (double dash) `btn--unplugged` means variation of the element
    - (double underscore) `btn__text` means children of the element
    ```HTML
    <button class='btn btn--umplugged'> <!-- variation of .btn-->
    <div class="btn__text"></div> <!-- child of .btn-->
    </button>
    ```


### Sources
[CSS Tricks](https://css-tricks.com/bem-101/)
[MDN Docs](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/CSS)