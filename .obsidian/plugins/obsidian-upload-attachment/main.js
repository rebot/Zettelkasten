var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// src/main.ts
__markAsModule(exports);
__export(exports, {
  default: () => main_default
});
var import_obsidian = __toModule(require("obsidian"));
var formData = new FormData();
formData.append("upload_preset", "obsidian");
var DEFAULT_SETTINGS = {
  services: [{
    name: "Sample service",
    uri: "https://api.cloudinary.com/v1_1/gilles-is/image/upload",
    headers: {
      "User-Agent": "Obsidian.md"
    },
    body: formData
  }]
};
var ObsidianUploadAttachment = class extends import_obsidian.Plugin {
  async onload() {
    console.log("loading plugin");
    await this.loadSettings();
    this.addRibbonIcon("dice", "Sample Plugin", () => {
      new import_obsidian.Notice("This is a notice!");
    });
    this.addStatusBarItem().setText("Status Bar Text");
    this.addCommand({
      id: "open-sample-modal",
      name: "Open Sample Modal",
      checkCallback: (checking) => {
        let leaf = this.app.workspace.activeLeaf;
        if (leaf) {
          if (!checking) {
          }
          return true;
        }
        return false;
      }
    });
    this.addSettingTab(new SettingTab(this.app, this));
    this.registerCodeMirror((cm) => {
      console.log("codemirror", cm);
    });
    this.registerDomEvent(document, "click", (evt) => {
      console.log("click", evt);
    });
    this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
  }
  onunload() {
    console.log("unloading plugin");
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var main_default = ObsidianUploadAttachment;
var ServiceModal = class extends import_obsidian.Modal {
  constructor(app, service, onSubmit) {
    super(app);
    this.service = service;
    this.onSubmit = onSubmit;
  }
  onOpen() {
    let {contentEl} = this;
    contentEl.createEl("h2", {text: `Service settings \u2014 ${this.service.name}`});
    const descHeading = document.createDocumentFragment();
    descHeading.append("Define the endpoint and headers used to upload files to ", descHeading.createEl("strong", {text: this.service.name}), ".");
    new import_obsidian.Setting(contentEl).setDesc(descHeading);
    new import_obsidian.Setting(contentEl).setName("Name of the service").addText((text) => {
      text.setPlaceholder("name").setValue(this.service.name).onChange(async (value) => {
        this.service.name = value;
      });
      text.inputEl.size = 50;
    });
    const descUri = document.createDocumentFragment();
    descUri.append("Set the ", descUri.createEl("code", {text: "endpoint uri "}), "of the service.");
    new import_obsidian.Setting(contentEl).setName("Endpoint").setDesc(descUri).addText((text) => {
      text.setPlaceholder("uri").setValue(this.service.uri).onChange(async (value) => {
        this.service.uri = value;
      });
      text.inputEl.size = 50;
    });
    const descHeaders = document.createDocumentFragment();
    descHeaders.append("Add authentication headers or other required headers in a ", descHeaders.createEl("strong", {text: "JSON "}), "format.");
    new import_obsidian.Setting(contentEl).setName("Headers").setDesc(descHeaders).addTextArea((text) => {
      text.setPlaceholder("headers").setValue(JSON.stringify(this.service.headers, null, 2)).onChange(async (value) => {
        this.service.headers = JSON.parse(value);
      });
      text.inputEl.rows = 5;
      text.inputEl.cols = 50;
    });
    const descBody = document.createDocumentFragment();
    descBody.append("The body is sent using ", descBody.createEl("code", {text: "multipart/form-data"}), " . Depending on the service, it might be required to pass ", descBody.createEl("strong", {text: "additional form-data "}), "to the service in order to authenticate.");
    new import_obsidian.Setting(contentEl).setName("Body").setDesc(descBody).addTextArea((text) => {
      text.setPlaceholder("body").setValue(JSON.stringify(this.service.body, null, 2)).onChange(async (value) => {
        this.service.body = JSON.parse(value);
      });
      text.inputEl.rows = 5;
      text.inputEl.cols = 50;
    });
  }
  onClose() {
    let {contentEl} = this;
    contentEl.empty();
  }
};
var SettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    this.containerEl.empty();
    this.add_services_header();
    this.add_services_setting();
    this.add_services_list();
  }
  add_services_header() {
    this.containerEl.createEl("h2", {text: "General Settings"});
  }
  add_services_list() {
    new import_obsidian.Setting(this.containerEl).setName("Services").setDesc("List of services that can be used to upload attachments to").addText((text) => text.setPlaceholder("Enter your secret").setValue("").onChange(async (value) => {
      console.log("Secret: " + value);
      this.plugin.settings.services[0].name = value;
      await this.plugin.saveSettings();
    }));
  }
  add_services_setting() {
    this.containerEl.createEl("h2", {text: "Services"});
    const descHeading = document.createDocumentFragment();
    descHeading.append("Attachments are uploaded to preconfigured ", descHeading.createEl("strong", {text: "services "}), "which are actived when files of a certain ", descHeading.createEl("strong", {text: "mime type "}), "are uploaded. First, the services should be configured.");
    new import_obsidian.Setting(this.containerEl).setDesc(descHeading);
    new import_obsidian.Setting(this.containerEl).setName("Add Service").setDesc("Add new upload service").addButton((button) => {
      button.setTooltip("Add additional upload service").setButtonText("+").setCta().onClick(() => {
        this.plugin.settings.services.push({
          name: "",
          uri: "",
          headers: {},
          body: new FormData()
        });
        this.plugin.saveSettings();
        this.display();
      });
    });
    this.plugin.settings.services.forEach((service, index) => {
      const descService = document.createDocumentFragment();
      descService.append(descService.createEl("strong", {text: service.name.charAt(0).toUpperCase() + service.name.slice(1)}));
      const s = new import_obsidian.Setting(this.containerEl).setDesc(descService).addExtraButton((cb) => {
        cb.setIcon("pencil").setTooltip("Open settings").onClick(() => {
          new ServiceModal(this.app, service, (service2) => this.plugin.saveSettings()).open();
        });
      }).addExtraButton((cb) => {
        cb.setIcon("documents").setTooltip("Duplicate service").onClick(() => {
          this.plugin.settings.services.push(service);
          this.plugin.saveSettings();
          this.display();
        });
      }).addExtraButton((cb) => {
        cb.setIcon("cross").setTooltip("Delete").onClick(() => {
          this.plugin.settings.services.splice(index, 1);
          this.plugin.saveSettings();
          this.display();
        });
      });
    });
  }
};
