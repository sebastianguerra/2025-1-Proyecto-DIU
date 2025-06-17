import { Button, Dialog, Portal } from "@chakra-ui/react";
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

interface DialogOptions {
  title: string;
  message: string;
}

const DialogContext = createContext<{
  showNotificationDialog: (options: DialogOptions) => void;
} | null>(null);

export function useDialogs() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialogs must be used within a DialogsProvider");
  }
  return context;
}

export function DialogsProvider({ children }: { children: React.ReactNode }) {
  const [dialogOptions, setDialogOptions] = useState<DialogOptions | null>(null);

  const handleClose = useCallback(() => {
    setDialogOptions(null);
  }, []);

  const showNotificationDialog = useCallback((options: DialogOptions) => {
    setDialogOptions(options);
  }, []);

  const contextValue = useMemo(() => ({
    showNotificationDialog,
  }), [showNotificationDialog]);

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      <Dialog.Root lazyMount open={!!dialogOptions} onOpenChange={handleClose} placement="center" motionPreset="slide-in-bottom">
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>{dialogOptions?.title}</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <p>{dialogOptions?.message}</p>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger onClick={handleClose}>
                  <Button>Cerrar</Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </DialogContext.Provider>
  );
}
