import { CopyCodeButton } from "@/components/ui/custom/copy-button";

interface CodeSnippetProps {
  code: string;
}

export default function CodeSnippet({ code }: CodeSnippetProps) {
  return (
    <div className={`bg-foreground/20 rounded-lg p-8 font-mono text-sm`}>
      <pre className="relative overflow-x-auto whitespace-pre-wrap">
        <code className="text-[0.6rem] leading-none select-text md:text-sm md:leading-normal">
          {code}
        </code>
        <div className="absolute top-0 right-0 flex justify-end">
          <CopyCodeButton code={code} />
        </div>
      </pre>
    </div>
  );
}
