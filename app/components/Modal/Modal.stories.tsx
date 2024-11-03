// import React, { useState } from "react";
// import { Meta, StoryFn } from "@storybook/react";
// import Modal, { ModalProps } from "./Modal";
// import Button from "../Button/Button";

// export default {
//   title: "Components/Modal/Modal",
//   component: Modal,
//   argTypes: {
//     isOpen: {
//       control: "boolean",
//       description: "Controla se o modal está aberto ou fechado",
//     },
//     title: {
//       control: "text",
//       description: "Título exibido no cabeçalho do modal",
//     },
//     children: {
//       control: "text",
//       description: "Conteúdo do corpo do modal",
//     },
//     headerContent: {
//       control: "text",
//       description: "Conteúdo do cabeçalho do modal, caso desejado.",
//     },
//     footerContent: {
//       control: "text",
//       description: "Conteúdo do rodapé do modal, caso desejado.",
//     },
//     onClose: {
//       action: "onClose",
//       description: "Função chamada ao fechar o modal",
//     },
//     size: {
//       control: {
//         type: "select",
//         options: ["sm", "md", "lg", "xl", "full"],
//       },
//       description: "Tamanho do modal (sm, md, lg, xl, full)",
//     },
//     overflow: {
//       control: "select",
//       options: ["inside", "outside"],
//       description: "Controla o comportamento do overflow",
//     },
//   },
// } as Meta;

// const Template: StoryFn<ModalProps> = (args: ModalProps) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => setIsOpen(true);
//   const handleClose = () => setIsOpen(false);

//   return (
//     <>
//       <Button
//         onClick={handleOpen}
//         variant="fill"
//         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//       >
//         Abrir Modal
//       </Button>
//       <Modal {...args} isOpen={isOpen} onClose={handleClose} />
//     </>
//   );
// };

// // Exemplo base com botões para os diferentes tamanhos
// export const WithOpenButton = Template.bind({});
// WithOpenButton.args = {
//   title: "Modal Aberta",
//   children: "Este é o conteúdo do modal.",
//   headerContent: <h3 className="text-2xl font-bold">Cabeçalho Customizado</h3>,
//   footerContent: (
//     <button
//       className="btn btn-primary"
//       onClick={() => alert("Ação no rodapé!")}
//     >
//       Ação no Rodapé
//     </button>
//   ),
// };

// // Variações de tamanho
// export const Small = Template.bind({});
// Small.args = {
//   ...WithOpenButton.args,
//   size: "sm",
// };

// export const Medium = Template.bind({});
// Medium.args = {
//   ...WithOpenButton.args,
//   size: "md",
// };

// export const Large = Template.bind({});
// Large.args = {
//   ...WithOpenButton.args,
//   size: "lg",
// };

// export const ExtraLarge = Template.bind({});
// ExtraLarge.args = {
//   ...WithOpenButton.args,
//   size: "xl",
// };

// export const FullScreen = Template.bind({});
// FullScreen.args = {
//   ...WithOpenButton.args,
//   size: "full",
// };

// export const OverflowInside = Template.bind({});
// OverflowInside.args = {
//   size: "md",
//   overflow: "inside",
//   title: "Modal com Overflow Inside",
//   children: (
//     <div style={{ height: "200vh" }}>
//       <p>Conteúdo muito longo dentro da modal.</p>
//     </div>
//   ),
// };

// export const OverflowOutside = Template.bind({});
// OverflowOutside.args = {
//   size: "lg",
//   overflow: "outside",
//   title: "Modal com Overflow Outside",
//   children: (
//     <div style={{ height: "100vh" }}>
//       <p>Conteúdo muito longo, mas o scroll é na página.</p>
//     </div>
//   ),
// };