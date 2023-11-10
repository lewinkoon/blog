---
author: "Lewin"
date: 2023-11-10
tags:
- technology
title: "Latex: local environment setup with VS Code"
---

LaTeX, a typesetting system commonly used for the production of scientific and mathematical documents, offers unparalleled control over document formatting.
Setting up a LaTeX distribution on your computer is the first step toward harnessing the power of this versatile typesetting system.
In this guide, we'll walk you through the process of installing and configuring a LaTeX distribution, so you can start creating professional-looking documents with ease.

## Setting up LaTeX distribution

There are several LaTeX distributions available, each with its unique features.
Two popular choices are TeX Live and MiKTeX. TeX Live is known for its comprehensive package management system and cross-platform compatibility, while MiKTeX is favored for its Windows-centric focus and on-the-fly package installation.
Choose the distribution that aligns with your preferences and operating system.

Visit the official website of your chosen LaTeX distribution to download the installer. Follow the installation instructions provided for your operating system.
The installation process is usually straightforward, but be sure to customize the installation to include the packages and components you need.

- For TeX Live: [https://www.tug.org/texlive/](https://www.tug.org/texlive/)
- For MiKTeX: [https://miktex.org/download](https://miktex.org/download)

## Install Visual Studio Code

Visual Studio Code (VS Code) is a powerful and versatile code editor that can enhance your development workflow.
To get started, open your preferred web browser and navigate to the official Visual Studio Code website at [https://code.visualstudio.com/](https://code.visualstudio.com/).
Here, you'll find the latest version of the editor available for download.

On the VS Code homepage, you'll notice a prominent "Download for Windows/Mac/Linux" button.
Click on the button that corresponds to your operating system.
The website is intelligent enough to detect your OS and suggest the appropriate download for you.

Once the download is complete, locate the installer file on your computer.
For Windows, this is typically an executable (.exe) file, while Mac users will have a .dmg file, and Linux users will find a .deb or .rpm file depending on their distribution.
Double-click on the installer file to initiate the installation process.

The installation wizard will guide you through the process.
You may be prompted to choose installation options such as the destination folder and whether to add VS Code to your system PATH.
For most users, the default settings are sufficient.

Once the installation is complete, you can launch Visual Studio Code.
On Windows and Mac, you can find it in your application menu, while on Linux, you can use your distribution's application launcher.

## Installing LaTeX workshop extension

Open the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or using the shortcut `Ctrl+Shift+X`.
In the Extensions view, search for "LaTeX Workshop" in the search bar.
Once you find the LaTeX Workshop extension by James Yu, click the "Install" button.

LaTeX Workshop comes with default settings that work for most users, but you can customize its behavior by modifying your VS Code settings.
To access the settings, click on the gear icon in the lower-left corner and select "Settings." Search for "LaTeX Workshop" to find and modify the extension's settings.

## Creating your first LaTeX document

Once your environment is set up, open your preferred LaTeX editor and create a new document.
In LaTeX, a basic document structure consists of a preamble and the document body.
The preamble includes settings and configurations, while the body contains the actual content.

```latex
\documentclass{article}

\begin{document}

% Your content goes here

\end{document}
```

Within the document environment, you can specify the title and author information for your document.

```latex
\title{My First LaTeX Document}
\author{Your Name}
\date{\today} % Use \date{} for no date or a specific date
\maketitle
```

Now, it's time to add some text to your document. LaTeX uses simple commands to format text.
For example, to create a new paragraph, leave a blank line in the code.

```latex
\section{Introduction}
This is the introductory paragraph of my document. LaTeX will automatically format the text for you.
```

Use commands like `\section{}`, `\subsection{}`, and `\subsubsection{}` to organize your document into sections and subsections.

```latex
\section{Main Section}
This is the content of the main section.

\subsection{Subsection}
This is a subsection within the main section.
```

LaTeX makes it easy to create lists. Use the `itemize` or `enumerate` environment for bullet points or numbered lists, respectively.

```latex
\begin{itemize}
	\item Item 1
	\item Item 2
	\item Item 3
\end{itemize}
```

To include images, use the `\includegraphics{}` command.
Make sure to specify the correct file path and format.

```latex
\begin{figure}
    \centering
    \includegraphics[width=0.5\textwidth]{image.jpg}
    \caption{A sample image.}
    \label{fig:image}
\end{figure}
```

LaTeX is renowned for its exceptional support for mathematical typesetting.
To include mathematical content, use the `equation` environment for standalone equations or include mathematical expressions within the text.

```latex
\section{Mathematics in LaTeX}

Here is a simple mathematical equation:

\begin{equation}
    E = mc^2
\end{equation}

This is the famous mass-energy equivalence equation introduced by Albert Einstein.
```

## Compiling and viewing your document

To compile your LaTeX document, open the document in VS Code and use the following shortcut: `Ctrl + Alt + B`.
Alternatively, you can click on the green play button in the top-right corner of the editor.
LaTeX Workshop will then generate a PDF file from your LaTeX source code.

After a successful compilation, the extension will automatically open the generated PDF.
If not, you can manually open it by clicking on the PDF icon in the lower-left corner of the editor.

## Conclusion

In conclusion, embracing LaTeX editing in Visual Studio Code opens up a world of efficiency and flexibility for document preparation.
The seamless integration of LaTeX tools within the VS Code environment empowers users to create sophisticated documents with ease.
The robust set of features, including real-time preview, intelligent autocompletion, and a vast array of extensions, transforms the LaTeX editing experience into a streamlined and enjoyable process.