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
var DEFAULT_SETTINGS = {
  services: [{
    name: "Sample service",
    uri: "https://api.cloudinary.com/v1_1/gilles-is/image/upload",
    headers: JSON.stringify({
      "User-Agent": "Obsidian.md"
    }, null, 2),
    body: JSON.stringify({
      file: "{file}",
      upload_preset: "obsidian"
    })
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
    this.service = Object.assign({}, service);
    this.onSubmit = onSubmit;
  }
  prettyPrintJSON(s) {
    try {
      const json = JSON.parse(s);
      return JSON.stringify(json, null, 2);
    } catch {
      return s;
    }
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
      text.setPlaceholder("headers").setValue(this.prettyPrintJSON(this.service.headers)).onChange(async (value) => {
        this.service.headers = value;
      });
      text.inputEl.rows = 5;
      text.inputEl.cols = 50;
    });
    const descBody = document.createDocumentFragment();
    descBody.append("The body is sent using ", descBody.createEl("code", {text: "multipart/form-data"}), " . Depending on the service, it might be required to pass ", descBody.createEl("strong", {text: "additional form-data "}), "to the service in order to authenticate.");
    new import_obsidian.Setting(contentEl).setName("Body").setDesc(descBody).addTextArea((text) => {
      text.setPlaceholder("body").setValue(this.prettyPrintJSON(this.service.body)).onChange(async (value) => {
        this.service.body = value;
      });
      text.inputEl.rows = 5;
      text.inputEl.cols = 50;
    });
    new import_obsidian.Setting(contentEl).addButton((cb) => {
      cb.setButtonText("cancel").onClick(() => {
        this.close();
      });
    }).addButton((cb) => {
      cb.setButtonText("test").onClick(async () => {
        const imageUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=";
        const imageRespons = await fetch(imageUri);
        const blob = await imageRespons.blob();
        const file = new File([blob], "Sample image", {type: "image/png"});
        this.service.body.append("file", file);
        const resp = await fetch(this.service.uri, {
          method: "POST",
          headers: this.service.headers,
          body: this.service.body
        });
        const json = await resp.json();
        console.log(JSON.stringify(json, null, 2));
      });
    }).addButton((cb) => {
      cb.setButtonText("save").onClick(() => {
        this.onSubmit(this.service);
        this.close();
      });
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
          new ServiceModal(this.app, service, (service2) => {
            this.plugin.settings.services[index] = service2;
            this.plugin.saveSettings();
            this.display();
          }).open();
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
