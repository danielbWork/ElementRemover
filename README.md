## <h2><a href="" target="_blank" rel="noopener noreferrer"><img width="48" src="icons/remove_icon-48.png" alt="ElementRemover"></a> ElementRemover</h2>

Removes elements from the webpage

## Usage

```bash
$ yarn install
$ yarn start
```

### `yarn start`

Build the extension into `dist/webext-dev` folder for **development**.

### `yarn build`

Build the extension into `dist/webext-prod` folder for **production**.

### `yarn build-zip`

Build a zip file following this format `<name>-<version>.zip` file.
Zip file is located in `dist/webext-zip` folder.


## Permissions used:

- **activeTab**: To be able to delete the element in the tab
- **contextMenus**: UI for user to delete the element

# License

This project is licensed under the terms of the [MIT License](LICENSE).
