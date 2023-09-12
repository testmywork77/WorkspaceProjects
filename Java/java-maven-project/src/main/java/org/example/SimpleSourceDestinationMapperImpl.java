//package org.example;
//
//public class SimpleSourceDestinationMapperImpl implements SimpleSourceDestinationMapper{
//    @Override
//    public SimpleDestination sourceToDestination(SimpleSource simpleSource){
//        if(simpleSource == null){
//            return null;
//        }
//
//        SimpleDestination simpleDestination = new SimpleDestination();
//        simpleDestination.setName(simpleSource.getName());
//        simpleDestination.setDescription(simpleSource.getDescription());
//        return simpleDestination;
//    }
//
//    @Override
//    public SimpleSource destinationToSource(SimpleDestination destination) {
//        return null;
//    }
//
//}
