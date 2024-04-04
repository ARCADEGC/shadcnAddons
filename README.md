# shadcn/ui Typography Component

## Options

-   **Variant** sets the style of each HTML tag
-   **Children** is the content inside the generated tag
-   **className** is optionally used for additional classes that override the default styles
-   **asChild** is an optional attribute that puts the classes on the **only** child element
-   **disableSelect** is an optional attribute that disables user selection

## How to use

```tsx
<>
    <Typography variant="h1">Level one heading</Typography>
    <Typography variant="h2">Level two heading</Typography>
    <Typography variant="h3">Level three heading</Typography>
    <Typography variant="h4">Level four heading</Typography>

    <Typography variant="p">Paragraph text</Typography>
    <Typography variant="blockquote">Blockquote text</Typography>

    <Typography
        variant="anchor"
        asChild
    >
        <a href="#">a brilliant plan</a>
    </Typography>

    <Typography variant="list">
        <li>List item</li>
    </Typography>

    <Typography variant="code">Inline Code</Typography>

    <Typography variant="lead">Lead Text</Typography>
    <Typography variant="muted">Muted text</Typography>

    <Typography variant="large">large text</Typography>
    <Typography variant="small">small text</Typography>

    <Typography variant="table">
        <thead>
            <tr>
                <th>Table heading</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Table data</td>
            </tr>
        </tbody>
    </Typography>
</>
```

## How to Use

### Set as different tag

```tsx
<>
    <Typography
        variant="p"
        asChild
    >
        <h3>This level 3 heading will be styled as paragraph text.</h3>
    </Typography>
</>
```

### Limit number of lines (maxLines)

```tsx
<>
    <Typography
        variant="p"
        className="line-clamp-2"
    >
        This text will be cut after 2 lines and ... will be added at the end.
    </Typography>
</>
```
