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

### em v. rem

- `em` sets the font size of an element relative to the font-size of its parent.  If no explicit is given, `1em` is equivalent to `16px`.
- When used to size elements that are NOT font, value is relative to the element’s own font-size. 

```CSS
  .parent {
    font-size: 10px;  
  }
  .child {
    font-size: 2em;
    padding: 1em;
  }
```

- This can create a problem of subsequent children... the grangchild in the example above would have 4x the original font-size!
  
```JSX
  <div class="parent">
    I'm 10px
    <div class="child">
    I'm 20px, cool
      <div class="child">
      I'm 40px, wat
        <div class="child">
        I'm 80px, wat wat
        </div>
      </div>
    </div>
  </div>
```

- `rem` to the rescue.  This stands for `root em` and will use the original `16px` root (or otherwise set) as the reference point. 

```CSS
  .parent {
    font-size: 1rem;  
  }
  .child {
    font-size: 2rem;
  }
```


### Optional - Group Determined

<!-- - Meaningful prefix
    - Visual components start with `c-` (layout)
    - Objects start with `o-` (buttons, etc)
    ```HTML
    <button class='c-layout'>
    <div class='c-layout-item c-grid o-button'></div>
    </button>
    ``` -->


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
[Digital Ocean](https://www.digitalocean.com/community/tutorials/css-rem-vs-em-units)


### Icons
[flaticon](https://www.flaticon.com/)


