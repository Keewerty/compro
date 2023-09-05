declare module 'html2pdf.js' {
    const html2pdf: {
      (): {
        from: (element: HTMLElement) => {
          set: (options: any) => {
            outputPdf: () => Promise<ArrayBuffer>;
          };
        };
      };
    };
  
    export = html2pdf;
  }
  