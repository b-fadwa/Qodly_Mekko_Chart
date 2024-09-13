# Overview

The mekko chart component, provided by the nivo library, also known by the Marimekko chart, is a two-dimensional stacked chart where the width of the columns varies according to the size of the data sections provided.
It can be useful in many purposes, mainly for data analysis, and it combines two dimensions of information into a single chart, providing an overall complete perspective of complex data.

## Mekko chart component
![Mekko chart](public/mekkoChart.png)
insert image!

### Datasource

| Name         | Type  | Required | Description                                                                                     |
| ------------ | ----- | -------- | ----------------------------------------------------------------------------------------------- |
| Qodly source | Array | Yes      | Will contain the set of objects where each object represents a series or category in the chart. |

## Properties

| Name             | Type    | Default  | Description                                                                                                                     |
| ---------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Layout           | string  | Vertical | Sets how the bars will be displayed, by default it's vertical                                                                   |
| Offset           | string  | none     | Refers to the offset type                                                                                                       |
| Segment accessor | string  |          | Refers to the segment identifier that will be accessed within your data, The segment is the bars' categories or groups          |
| Left legend      | string  |          | Sets the label of the left legend                                                                                               |
| Value accessor   | string  |          | Refers to the numeric/ size of the data section provided                                                                        |
| Bottom Legend    | string  |          | Sets the label of the bottom legend                                                                                             |
| Right Legend     | string  |          | Sets the label of the right legend                                                                                              |
| Dimensions       | array   |          | Sets of objects with label and content properties                                                                               |
| Legend position  | string  | Middle   | Sets the legends' position (end , top, middle)                                                                                  |
| Inner padding    | number  | 9        | Sets the inner padding                                                                                                          |
| Outer padding    | number  | 0        | Sets the outer padding                                                                                                          |
| Color scheme     | string  | Nivo     | Sets the bars color'scheme                                                                                                      |
| Show pattern     | boolean | false    | Controls if the bars' lines' patterns are visible or not                                                                        |
| Is interactive   | boolean | false    | Controls if the chart is interactive by showing or hiding the informing dialog linked to each segment once ohvering on them not |
