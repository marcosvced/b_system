# B·System

## Sass y funciones

### Variables y utilidades
Tienes que incluir el codigo según las utilidades que necesites en tu componente o modulo de sass
```scss
@use '~variables' as variable;
@use '~helpers' as helper;
@use '~mixins' as mixin;
@use '~helpers/themed';
@use '~placeholders';
```
Será muy habitual este comienzo
```scss
@use '../helpers' as helper;
@use '../mixins' as mixin;
@use '../helpers/themed';
@use '../placeholders';
```

### Funciones
```scss
// sizes
font-size: helper.rem(40);
font-size: helper.em(40);
line-height: helper.space(24);
// option spaces in - /lib/scss/variables/_spacing.scss


// font
font-size: helper.size(sm);
font-family: helper.family(roboto);
font-weight: helper.weight(bold);
font-style: helper.style(italic);
// size(xxs, xs, sm, md, lg, xl, xxl);
// family(roboto, playfair, code);
// weight(light, regular, medium, bold);
// style(inherit, initial, italic, normal, oblique, revert, unset,);

// colors
color: helper.primary('blue');
color: helper.secondary('blue');
color: helper.grayscale(light);
background-color: helper.opacity(light-100);
background-color: helper.button(primary--hover);
// option colors in - /lib/scss/variables/_palette.scss

```

### Mixins
```scss
// margenes
@include mixin.x(12);
@include mixin.y(12);
@include mixin.x-y(12);

// shapes
@include mixin.circle(24);
@include mixin.square(32);
@include mixin.rectangle(32);
```

### Placeholders
```scss
// font styles
@extend %x1-text;
@extend %x2-text;
@extend %x3-text;
@extend %x4-text;
@extend %x5-text;
@extend %x6-text;
@extend %x7-text;
@extend %x8-text;
@extend %x9-text;
@extend %x10-mini;
@extend %body-bold-text;
@extend %body-medium-text;
@extend %body-regular-text;
@extend %body-light-text;
```

### Tools
```html
<div class="space-{position}-{breakpoint}-{n}"></div>
<div class="inner-space-{position}-{breakpoint}-{n}"></div>
<div class="space-x-{breakpoint}-{n}"></div>
<div class="space-y{breakpoint}-{n}"></div>
<div class="space-xy-{breakpoint}-{n}"></div>
```
· Siendo _breackpoint_ una key de los valores definidos en el map `$breakpoints` del fichero `/lib/scss/variables/_spacing.scss`.
· Estas clases se pueden definir sin el uso de un _breackpoint_.
· Siendo _position_ uno de los siguientes valores: _top, bottom, left, right, inline, block_.
· Siendo _n_ una de las keys definidas en la variable `$space` del fichero `/lib/scss/variables/_spacing.scss`.

### Uso de theme

```css
@include themed.properties {
    {propiedad-css}: themed.values(valor-light, valor-dark);
}
```
**Ejemplo de uso:**
```scss
.section {
  @include themed.properties {
    background-color: themed.values(helper.grayscale(light), helper.grayscale(1100));
  }

  &.darkener {
    @include themed.properties {
      background-color: themed.values(helper.grayscale(100), helper.grayscale(1200));
    }
  }
}
```
