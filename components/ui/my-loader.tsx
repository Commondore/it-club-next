import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const MyLoader = ({ count }: { count: number }) => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {Array(count)
        .fill(null)
        .map((_, index) => {
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-6" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-6" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-20 h-6" />
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};
