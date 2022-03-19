---
draft: false
author: "Anónimo"
title: "Formato Markdown.  Prontuario "
date: "2021-12-19"
description: "Artículo de ejemplo que muestra la sintaxis básica de Markdown y
el formato de los elementos HTML."
categories:
- Test
tags:
- markdown
- charts.js
- mermaid
katex: true
---

Este artículo ofrece una muestra de la sintaxis básica de Markdown que se puede
utilizar en los archivos de contenido de Hugo, también muestra si los elementos
básicos de HTML están decorados con CSS en un tema de Hugo.

## Párrafo

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem[^1] alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat. Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

[^1]: Lorem Ipsum, sometimes referred to as *lipsum*, is the placeholder text used in design when creating content.

## Citas

El elemento blockquote representa el contenido que se cita de otra fuente,
opcionalmente con una cita que debe estar dentro de un elemento `footer` o
`cite`, y opcionalmente con cambios en línea como anotaciones y abreviaturas.

> Un amigo es uno que lo sabe todo de ti y a pesar de ello te quiere.<br>
> — <cite>Elbert Hubbard</cite>

## Tablas

Las tablas no forman parte del núcleo de las especificaciones de Markdown, pero
Hugo las admite desde el principio.

  |              | Age | City     | Type C |
  | ------------ | --- | -------- | ------ |
  | John Smith   | 24  | New York | 6      |
  | Jane Doe     | 63  | Denver   | 2      |
  | Mary Johnson | 35  | Alberta  | 6      |


## Código

```go
package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	data, _ := os.ReadFile("input.txt")

	slices := strings.Split(string(data), "\n")

	fmt.Printf("Part one: %d\n", p1(slices))
	fmt.Printf("Part two: %d\n", p2(slices))
}
```

## Tipos de Listas

Listas ordenadas, desordenadas y anidadas

### Lista Ordenada

1. Primer elemento
2. Segundo elemento
3. Tercer elemento

### Lista Desordenada

* Elemento
* Otro elemento
* Y otro elemento

### Lista Anidada

* Fruta
  * Manzana
  * Naranja
  * Plátano
* Lácteos
  * Leche
  * Queso