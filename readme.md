# B·System

## Sass y funciones

### Variables y utilidades
Tienes que incluir el codigo según las utilidades que necesites en tu component o modulo de sass
```go
@use 'variables' as *;
@use 'common' as *;
@use 'helpers' as *;
@use 'mixins' as *;
@use 'placeholders' as *;
@use 'components' as *;
@use 'helpers' as *;
```
Será muy habitual este comienzo
```go
@use 'helpers' as *;
@use 'mixins' as *;
@use 'placeholders' as *;
```

### Funciones
```go
// sizes
font-size: rem(40);
font-size: em(40);
line-height: space(24);

// font
font-size: size(sm);
font-family: family(roboto);
font-weight: weight(bold);
// size(xxs, xs, sm, md, lg, xl, xxl);
// family(roboto, playfair, code);
// weight(light, regular, medium, bold);

// colors
color: primary('blue');
color: secondary('blue');
color: grayscale(light);
background-color: opacity(light-100);
background-color: button(primary--hover);
// option colors in - /lib/scss/variables/_palette.scss

// others
backdrop-filter: blur(rem(9));
```

### Mixins
```go
// margenes
@include x(12);
@include y(12);
@include x-y(12);

// shapes
@include circle(24);
@include square(32);
@include rectangle(32);
```

### Placeholders
```go
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