import type { Meta, StoryObj } from "@storybook/html";
import { IInputs, IOutputs } from "../FluentUITagList/generated/ManifestTypes";
import { useArgs, useEffect } from "@storybook/preview-api";
import {
  ComponentFrameworkMockGenerator,
  DataSetMock,
  EnumPropertyMock,
  ShkoOnline,
} from "@shko.online/componentframework-mock";
import { FluentUITagList as Component } from "../FluentUITagList/index";
import { ImgDavid, ImgHomer } from "./mock/EntityImages";
import { action } from "@storybook/addon-actions";

// Note: Define an interface for your story arguments (which can be controlled with the Controls addon)
interface StoryArgs {
  tagsDataSet: { [column: string]: any }[];
  showRecordImage: "false" | "true";
  openRecordOnClick: "false" | "true";
  appearance: "filled" | "ghost" | "outline" | "tint";
  shape: "circular" | "rounded" | "square";
  color:
    | "brand"
    | "danger"
    | "important"
    | "informative"
    | "severe"
    | "subtle"
    | "success"
    | "warning";
  size: "small" | "medium" | "large" | "extra-large";
  theme:
    | "WebLight"
    | "WebDark"
    | "TeamsLight"
    | "TeamsDark"
    | "TeamsHighContrast";
  imageshape: "circular" | "rounded" | "square";
}

// This defines your component's Story
export default {
  title: "FluentUI/TagList",
  // Note: ArgTypes controls the way inputs are rendered in the Controls addon.
  argTypes: {
    tagsDataSet: {
      control: "array",
      name: "Tags",
      description: "Dataset to Expose",
      table: {
        type: {
          summary: `{[column: string]: any }[]`,
        },
        category: "Parameters",
      },
    },
    showRecordImage: {
      control: "select",
      name: "Show record image",
      description: "Show the record image beside the text",
      options: ["true", "false"],
      table: {
        type: {
          summary: `true | false`,
        },
        category: "Parameters",
      },
    },
    openRecordOnClick: {
      control: "select",
      name: "Open Record OnClick",
      description: "Open the record",
      options: ["true", "false"],
      table: {
        type: {
          summary: `true | false`,
        },
        category: "Parameters",
      },
    },
    appearance: {
      control: "select",
      name: "Appearance",
      description: "Appearance of the Badge",
      options: ["filled", "ghost", "outline", "tint"],
      table: {
        type: {
          summary: `filled | ghost | outline | tint`,
        },
        category: "Parameters",
      },
    },
    shape: {
      control: "select",
      name: "Shape",
      description: "Shape of the Badge",
      options: ["circular", "rounded", "square"],
      table: {
        type: {
          summary: `circular | rounded | square`,
        },
        category: "Parameters",
      },
    },
    color: {
      control: "select",
      name: "Color",
      description: "Color of the Badge",
      options: [
        "brand",
        "danger",
        "important",
        "informative",
        "severe",
        "subtle",
        "success",
        "warning",
      ],
      table: {
        type: {
          summary: `brand | danger | important | informative | severe | subtle | success | warning `,
        },
        category: "Parameters",
      },
    },

    size: {
      control: "select",
      name: "Size",
      description: "Size of the Badge",
      options: ["small", "medium", "large", "extra-large"],
      table: {
        type: {
          summary: `small | medium | large | extra-large `,
        },
        category: "Parameters",
      },
    },
    theme: {
      control: "select",
      name: "Theme",
      description: "Theme",
      options: [
        "WebLight",
        "WebDark",
        "TeamsLight",
        "TeamsDark",
        "TeamsHighContrast",
      ],
      table: {
        type: {
          summary: `WebLight | WebDark | TeamsLight | TeamsDark | TeamsHighContrast`,
        },
        category: "Parameters",
      },
    },
    imageshape: {
      control: "select",
      name: "Image Shape",
      description: "Shape of the Image if showRecordImage is set to true",
      options: ["circular", "rounded", "square"],
      table: {
        type: {
          summary: `circular | rounded | square`,
        },
        category: "Parameters",
      },
    },
    // isDisabled: {
    //   control: "boolean",
    //   name: "Disabled",
    //   table: {
    //     category: "Mode",
    //   },
    // },
    // isVisible: {
    //   control: "boolean",
    //   name: "Visible",
    //   table: {
    //     category: "Mode",
    //   },
    // },
  },

  args: {
    tagsDataSet: [
      {
        myId: "1",
        ["tagLabel"]: "item1",
      },
      {
        myId: "2",
        ["tagLabel"]: "item2",
      },
      {
        myId: "3",
        ["tagLabel"]: "item3",
      },
      {
        myId: "4",
        ["tagLabel"]: "item4",
      },
    ],
    appearance: "filled",
    shape: "rounded",
    color: "brand",
    size: "medium",
    theme: "WebLight",
    showRecordImage: "true",
    openRecordOnClick: "false",
    imageshape: "rounded",
  },
  decorators: [
    // Note: You can control the div assigned to your PCF component here.
    // Also, you can make this div resizable if you want to test trackContainerResize
    (Story) => {
      var container = document.createElement("div");
      container.style.margin = "2em";
      container.style.padding = "1em";
      container.style.maxWidth = "350px";
      container.style.border = "dotted 1px";

      var storyResult = Story();
      if (typeof storyResult == "string") {
        container.innerHTML = storyResult;
      } else {
        container.appendChild(storyResult);
      }
      return container;
    },
  ],
} as Meta<StoryArgs>;

const renderGenerator = () => {
  let container: HTMLDivElement | null;
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;

  return function () {
    const [args, updateArgs] = useArgs<StoryArgs>();
    // Fires on unload story
    useEffect(
      () => () => {
        container = null;
        mockGenerator.control.destroy();
      },
      []
    );
    if (!container) {
      container = document.createElement("div");
      mockGenerator = new ComponentFrameworkMockGenerator(
        Component,
        {
          showRecordImage: EnumPropertyMock,
          openRecordOnClick: EnumPropertyMock,
          appearance: EnumPropertyMock,
          size: EnumPropertyMock,
          shape: EnumPropertyMock,
          imageshape: EnumPropertyMock,
          color: EnumPropertyMock,
          theme: EnumPropertyMock,
          tagsDataSet: DataSetMock,
        },
        container
      );
      const itemsLogicalName = "contact";
      mockGenerator.metadata.initMetadata([
        {
          EntitySetName: itemsLogicalName,
          LogicalName: itemsLogicalName,
          PrimaryIdAttribute: "myId",
          PrimaryNameAttribute: "tagLabel",
          PrimaryImageAttribute: "entityimage",
          Attributes: ["myId", "tagLabel", "entityimage"].map(
            (logicalName) =>
              ({
                EntityLogicalName: itemsLogicalName,
                LogicalName: logicalName,
              } as ShkoOnline.StringAttributeMetadata)
          ),
        },
        {
          LogicalName: itemsLogicalName + "@columns",
          EntitySetName: itemsLogicalName + "@columns",
          PrimaryIdAttribute: "name",
          PrimaryNameAttribute: "displayName",
          Attributes: ["name", "displayName"].map(
            (logicalName) =>
              ({
                EntityLogicalName: itemsLogicalName,
                LogicalName: logicalName,
              } as ShkoOnline.StringAttributeMetadata)
          ),
        } as ShkoOnline.EntityMetadata,
      ]);
      mockGenerator.context._parameters.tagsDataSet._Bind(
        itemsLogicalName,
        "tagsDataSet"
      );
      mockGenerator.context._parameters.tagsDataSet._InitItems(
        args.tagsDataSet
      );
      mockGenerator.context.navigation.openForm.callsFake((o, p) => {
        console.log("open", o, p);
        action("Open")(o);
        return new Promise((resolve) => {
          resolve({
            savedEntityReference: [],
          });
        });
      });
      mockGenerator.context.webAPI.retrieveRecord.callsFake(
        (entityType: string, id: string, options?: string) => {
          if (entityType === "contact") {
            var img =
              id === "1"
                ? {
                    entityimage: ImgDavid,
                  }
                : id === "2"
                ? {
                    entityimage: ImgHomer,
                  }
                : {
                    entityimage: "",
                  };

            return new Promise((resolve) =>
              resolve(img as ComponentFramework.WebApi.Entity)
            );
          }
          return new Promise((_resolve, reject) => {
            reject(new Error("invalid"));
          });
        }
      );

      // mockGenerator.context.mode.isControlDisabled = args.isDisabled;
      // mockGenerator.context.mode.isVisible = args.isVisible;
      mockGenerator.context._SetCanvasItems({
        appearance: args.appearance,
        color: args.color,
        imageshape: args.imageshape,
        openRecordOnClick: args.openRecordOnClick,
        shape: args.shape,
        showRecordImage: args.showRecordImage,
        size: args.size,
        theme: args.theme,
      });

      mockGenerator.ExecuteInit();
    }

    if (mockGenerator) {
      // mockGenerator.context.mode.isVisible = args.isVisible;
      // mockGenerator.context.mode.isControlDisabled = args.isDisabled
      mockGenerator.context._parameters.appearance._SetValue(args.appearance);
      mockGenerator.context._parameters.size._SetValue(args.size);
      mockGenerator.context._parameters.shape._SetValue(args.shape);
      mockGenerator.context._parameters.color._SetValue(args.color);
      mockGenerator.context._parameters.theme._SetValue(args.theme);
      mockGenerator.context._parameters.imageshape._SetValue(args.imageshape);
      mockGenerator.context._parameters.openRecordOnClick._SetValue(
        args.openRecordOnClick
      );
      mockGenerator.context._parameters.showRecordImage._SetValue(
        args.showRecordImage
      );
      mockGenerator.context._parameters.tagsDataSet.refresh();
      mockGenerator.ExecuteUpdateView();
    }

    return container;
  };
};

// This is a particular configuration of you component. You can export different StoryObj objects
// to show different states of your component
export const Default = {
  render: renderGenerator(),
  parameters: { controls: { expanded: true } },
} as StoryObj<StoryArgs>;
export const SizeSmall = {
  render: renderGenerator(),
  args: {
    size: "small",
  },
};
export const SizeMedium = {
  render: renderGenerator(),
  args: {
    size: "medium",
  },
};
export const SizeLarge = {
  render: renderGenerator(),
  args: {
    size: "large",
  },
};
export const SizeExtraLarge = {
  render: renderGenerator(),
  args: {
    size: "extra-large",
  },
};
export const AppearanceFilled = {
  render: renderGenerator(),
  args: {
    appearance: "filled",
  },
};

export const AppearanceGhost = {
  render: renderGenerator(),
  args: {
    appearance: "ghost",
  },
};

export const AppearanceOutline = {
  render: renderGenerator(),
  args: {
    appearance: "outline",
  },
};

export const AppearanceTint = {
  render: renderGenerator(),
  args: {
    appearance: "tint",
  },
};

export const ShapeCircular = {
  render: renderGenerator(),
  args: {
    shape: "circular",
  },
};

export const ShapeRounded = {
  render: renderGenerator(),
  args: {
    shape: "rounded",
  },
};

export const ShapeSquare = {
  render: renderGenerator(),
  args: {
    shape: "square",
  },
};

export const ColorBrand = {
  render: renderGenerator(),
  args: {
    color: "brand",
  },
};

export const ColorImportant = {
  render: renderGenerator(),
  args: {
    color: "important",
  },
};

export const ColorInformative = {
  render: renderGenerator(),
  args: {
    color: "informative",
  },
};

export const ColorSevere = {
  render: renderGenerator(),
  args: {
    color: "severe",
  },
};

export const ColorSubtle = {
  render: renderGenerator(),
  args: {
    color: "subtle",
  },
};

export const ColorSuccess = {
  render: renderGenerator(),
  args: {
    color: "success",
  },
};

export const ColorWarning = {
  render: renderGenerator(),
  args: {
    color: "warning",
  },
};
