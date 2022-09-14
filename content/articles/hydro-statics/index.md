---
author: "Lewin"
title: Presión hidroestática en líquidos
date: 2022-06-24
katex: true
tags:
- presión
- fluidomecánica
- hidroestática
categories:
- ingeniería
resources:
- name: distribucion
  title: Figura 1
  src: distribucion.png
---

La presión hidroestática es un término de vital importancia en el cálculo de todo tipo de instalaciones fluidas.

![Distribución de presión hidroestática en océanos y en la atmósfera](distribucion)

# Explicación

Los líquidos son tan **incompresibles** que podemos despreciar la variación de su densidad hidroestática. Por eso supondremos que la densidad es **constante** en estos casos.  En los lagos y océanos, el sistema de coordenadas utilizado habitualmente es el de la Figura 1, con \\( z = 0 \\) en la superficie libre, donde \\( p \\) tiene el valor de la presion atmosférica \\( p_a \\). Al introducir esto en la ecuación siguiente tendremos, para el valor \\( p \\) de la presión a una profundidad \\( z \\) (de valor negativo).

$$ p_2 - p_1 = - \rho g (z_2 -z_1) $$

donde \\( \rho g \\) es el peso específico medio en el océano o lago. Como veremos, la ecuación es válida también en los niveles más bajos de la atmósfera , con un error del 2 por 100 a 300 m de altura.

# Ejemplo

El lago *Newfound*, un lago de agua dulce cerca de *Bristol* tiene una profundidad máxima de 60 m, y la presión atmosférica media es 91 kPa. Calcular la presión absoluta en kilopascales a la profundidad máxima.

$$ p = 91~kN/m^2 -(9790~N/m^3)(-60~m)\frac{1~kN}{1000~N} $$
$$ = 91~kPa + 587~kN/m^2 = 678~kPa $$

# Referencias

White, F. M. (2002). *Mecánica de fluidos*. MacGraw-Hill.