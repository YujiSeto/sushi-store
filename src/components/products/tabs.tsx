import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductsTabs = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="flex w-full">
        <TabsTrigger value="tab1" className="flex-1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="flex-1">
          Tab 2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Tab 1 content</TabsContent>
      <TabsContent value="tab2">Tab 2 content</TabsContent>
    </Tabs>
  );
};
