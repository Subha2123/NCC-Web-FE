import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';

export default function ModalComponent({open,close,props,size}) {
    const theme = useMantineTheme();

  return (
    
    <Modal
      size={size}
      opened={open}
      onClose={close}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      {props}
    </Modal>
  )

}