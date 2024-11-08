import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal"; // Importando o componente Modal atualizado
import Button from "../Button/Button";

export default {
  title: "Components/Modal/Modal",
  component: Modal.Root,
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controla se o modal está aberto ou fechado",
    },
    size: {
      control: { type: "select", options: ["sm", "md", "lg", "xl", "full"] },
      description: "Tamanho do modal (sm, md, lg, xl, full)",
    },
    overflow: {
      control: "select",
      options: ["inside", "outside"],
      description: "Controla o comportamento do overflow",
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <Button
        onClick={handleToggleModal}
        variant="fill"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isOpen ? "Fechar Modal" : "Abrir Modal"}
      </Button>
      <Modal.Root
        {...args}
        isOpen={isOpen}
        onClose={handleToggleModal}
        toggleModalOpen={setIsOpen}
      >
        <Modal.Header>
          <Modal.Title>Exemplo de Modal</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          <p>Este é o conteúdo do modal.</p>
        </Modal.Content>
        <Modal.Footer>
          <Button
            onClick={() => alert("Ação no rodapé!")}
            variant="outline"
            className="mt-4"
          >
            Ação no Rodapé
          </Button>
        </Modal.Footer>
      </Modal.Root>
    </>
  );
};

export const BaseExample = Template.bind({});
BaseExample.args = {
  size: "md",
  overflow: "inside",
};

export const Small = Template.bind({});
Small.args = { size: "sm" };

export const Medium = Template.bind({});
Medium.args = { size: "md" };

export const Large = Template.bind({});
Large.args = { size: "lg" };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { size: "xl" };

export const FullScreen = Template.bind({});
FullScreen.args = { size: "full" };

export const OverflowInside = Template.bind({});
OverflowInside.args = {
  size: "md",
  overflow: "inside",
};

export const OverflowOutside = Template.bind({});
OverflowOutside.args = {
  size: "lg",
  overflow: "outside",
  children: (
    <div style={{ height: "100vh" }}>
      <p>Conteúdo longo, mas o scroll está na página.</p>
    </div>
  ),
};
